import React, { useEffect, useMemo, useState } from 'react';
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

export function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [homeData, setHomeData] = useState<HomeScreenData | null>(null);

  const filteredNewItems = useMemo(() => newItems, []);
  const filteredMovieItems = useMemo(() => movieItems, []);

  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    async function loadHomeData() {
      const data = await getHomeScreenData();
      setHomeData(data);
    }

    loadHomeData();
  }, []);

  if (!homeData) {
    return <Screen style={styles.screen} />;
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
