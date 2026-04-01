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
import { useCallback, useEffect, useState } from 'react';
import { MediaDetails } from '../../types/details';
import { getMediaDetails } from '../../services/details/detailsService';
import { ScreenLoader } from '../../components/common/ScreenLoader';
import { StateFeedback } from '../../components/common/StateFeedback';
import { CloudOff } from 'lucide-react-native';

type DetailsScreenStatus = 'loading' | 'success' | 'error';

export function DetailsScreen() {
  const [item, setItem] = useState<MediaDetails | null>(null);
  const [status, setStatus] = useState<DetailsScreenStatus>('loading');

  const tabBarHeight = useBottomTabBarHeight();

  const loadDetails = useCallback(async () => {
    try {
      setStatus('loading');

      const data = await getMediaDetails();

      setItem(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadDetails();
  }, [loadDetails]);

  if (status === 'loading') {
    return (
      <Screen style={styles.screen}>
        <ScreenLoader label="Loading details..." />
      </Screen>
    );
  }

  if (status === 'error' || !item) {
    return (
      <Screen style={styles.screen}>
        <StateFeedback
          icon={CloudOff}
          title={'Could not load the home'}
          description="The selected media could not be loaded right now. Please try again."
          actionLabel="Try again"
          onAction={loadDetails}
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
