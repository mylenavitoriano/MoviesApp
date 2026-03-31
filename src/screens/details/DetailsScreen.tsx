import { Screen } from '../../components/common/Screen';
import { ScrollView, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { DetailHero } from '../../components/details/DetailHero';
import { GenrePills } from '../../components/details/GenrePills';
import { Text } from 'react-native-paper';
import { spacing } from '../../theme/spacing';
import { KeyInfoList } from '../../components/details/KeyInfoList';
import { CastList } from '../../components/details/CastList';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { MediaDetails } from '../../types/details';
import { getMediaDetails } from '../../services/details/detailsService';

export function DetailsScreen() {
  const [item, setItem] = useState<MediaDetails | null>(null);

  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    async function loadDetails() {
      const data = await getMediaDetails();
      setItem(data);
    }

    loadDetails();
  }, []);

  if (!item) {
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
        <DetailHero item={item} />

        <GenrePills items={item.genres} />

        <Text variant="headlineSmall" style={styles.sectionTitle}>
          Overview
        </Text>

        <Text variant="bodyLarge" style={styles.overview}>
          {item.overview}
        </Text>

        <KeyInfoList items={item.keyInfo} />
        <CastList items={item.cast} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
  sectionTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.md,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  overview: {
    color: colors.textSecondary,
    lineHeight: 26,
    marginBottom: spacing.xl,
    paddingBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
