import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { Screen } from '../../components/common/Screen';
import { CategoryChips } from './components/CategoryChips';
import { FeaturedBanner } from './components/FeaturedBanner';
import { MediaSection } from './components/MediaSection';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ScreenLoader } from '../../components/common/ScreenLoader';
import { StateFeedback } from '../../components/common/StateFeedback';
import { CloudOff, SearchX } from 'lucide-react-native';
import { useHomeData } from '../../hooks/useHomeData';


export function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const tabBarHeight = useBottomTabBarHeight();

  const { data, isLoading, isError, refetch } = useHomeData();

  if (isLoading) {
    return (
      <Screen style={styles.screen}>
        <ScreenLoader label="Loading home..." />
      </Screen>
    );
  }

  if (isError) {
    return (
      <Screen style={styles.screen}>
        <StateFeedback
          icon={CloudOff}
          title={'Could not load the home'}
          description="Something went wrong while loading the catalog. Please try again."
          actionLabel="Try again"
          onAction={refetch}
        />
      </Screen>
    );
  }

  const hasItems = data?.sections.some(section => section.items.length > 0);
  const isEmpty = !data?.featuredItem && data?.featuredItem != null && !hasItems;

  if (isEmpty || !data) {
    return (
      <Screen style={styles.screen}>
        <StateFeedback
          icon={SearchX}
          title={'Nothing to show yet'}
          description="We could not find featured content or media sections for the home screen."
          actionLabel="Reload"
          onAction={refetch}
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

        <CategoryChips
          items={data.categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <FeaturedBanner item={data.featuredItem} />

        {data.sections.map(section => (
          <MediaSection key={section.id} title={section.title} items={section.items} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
});
