import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { Screen } from '../../components/common/Screen';
import { HomeSearchBar } from './components/HomeSearchBar';
import { CategoryChips } from './components/CategoryChips';
import {
  categories,
  featuredItems,
  movieItems,
  newItems,
} from '../../mocks/home';
import { FeaturedBanner } from './components/FeaturedBanner';
import { MediaSection } from './components/MediaSection';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { getHomeScreenData } from '../../services/home/homeService';
import { HomeScreenData } from '../../types/media';
import { ScreenLoader } from '../../components/common/ScreenLoader';
import { StateFeedback } from '../../components/common/StateFeedback';
import { CloudOff, SearchX } from 'lucide-react-native';

type HomeScreenStatus = 'loading' | 'success' | 'empty' | 'error';

export function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [homeData, setHomeData] = useState<HomeScreenData | null>(null);
  const [status, setStatus] = useState<HomeScreenStatus>('loading');

  const filteredNewItems = useMemo(() => newItems, []);
  const filteredMovieItems = useMemo(() => movieItems, []);

  const tabBarHeight = useBottomTabBarHeight();

  const loadHomeData = useCallback(async () => {
    try {
      setStatus('loading');

      const data = await getHomeScreenData();
      const hasItems = data.sections.some(section => section.items.length > 0);
      const isEmpty = !data.featuredItem && !hasItems;

      setHomeData(data);
      setStatus(isEmpty ? 'empty' : 'success');
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadHomeData();
  }, [loadHomeData]);

  if (status === 'loading') {
    return (
      <Screen style={styles.screen}>
        <ScreenLoader label="Loading home..." />
      </Screen>
    );
  }

  if (status === 'error') {
    return (
      <Screen style={styles.screen}>
        <StateFeedback
          icon={CloudOff}
          title={'Could not load the home'}
          description="Something went wrong while loading the catalog. Please try again."
          actionLabel="Try again"
          onAction={loadHomeData}
        />
      </Screen>
    );
  }

  if (status === 'empty' || !homeData) {
    return (
      <Screen style={styles.screen}>
        <StateFeedback
          icon={SearchX}
          title={'Nothing to show yet'}
          description="We could not find featured content or media sections for the home screen."
          actionLabel="Reload"
          onAction={loadHomeData}
        />
      </Screen>
    );
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: tabBarHeight + 24,
        }}
      >
        <HomeSearchBar value={search} onChangeText={setSearch} />

        <CategoryChips
          items={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <FeaturedBanner item={featuredItems[0]} />

        <MediaSection title="New" items={filteredNewItems} />
        <MediaSection title="Movies" items={filteredMovieItems} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
});
