import { Screen } from '../../components/common/Screen';
import { ScrollView, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { DetailHero } from '../../components/details/DetailHero';
import { GenrePills } from '../../components/details/GenrePills';
import { Text } from 'react-native-paper';
import { spacing } from '../../theme/spacing';
import { KeyInfoList } from '../../components/details/KeyInfoList';
import { CastList } from '../../components/details/CastList';
import { ScreenLoader } from '../../components/common/ScreenLoader';
import { StateFeedback } from '../../components/common/StateFeedback';
import { CloudOff } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailsRoutProp, RootStackNavigationProp } from '../../routes/types';
import { useFavorites } from '../../hooks/useFavorites';
import { useMediaDetails } from '../../hooks/useMediaDetails';

export function DetailsScreen() {

  const route = useRoute<DetailsRoutProp>();
  const navigation = useNavigation<RootStackNavigationProp>();
  const { id, type } = route.params;

  const { isFavorite, removeFavorite, addFavorite } = useFavorites();
  const { data: item, isLoading, isError, refetch } = useMediaDetails(id, type);

  function handleToggleFavorite () {
    if(!item) {
      return
    }

    if(isFavorite(item.id)) {
      removeFavorite(item.id)
    } else {
      addFavorite({
        id: item.id,
        title: item.title,
        year: item.year,
        rating: item.rating,
        type: item.type,
        posterUrl: item.imageUrl,
        backdropUrl: item.backdropUrl
      });
    }
  }

  if (isLoading) {
    return (
      <Screen style={styles.screen}>
        <ScreenLoader label="Loading details..." />
      </Screen>
    );
  }

  if (isError || !item) {
    return (
      <Screen style={styles.screen}>
        <StateFeedback
          icon={CloudOff}
          title={'Could not load the home'}
          description="The selected media could not be loaded right now. Please try again."
          actionLabel="Try again"
          onAction={refetch}
        />
      </Screen>
    );
  }

  

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 48}}
      >
        <DetailHero item={item} onBack={navigation.goBack} isFavorite={isFavorite(item.id)} onToggleFavorite={handleToggleFavorite}/>

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
