import { Text } from 'react-native-paper';
import { Screen } from '../../components/common/Screen';
import { ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { SearchFilters, SearchMediaType, SearchResultItem } from '../../types/search';
import { useState } from 'react';
import {
  searchInitialFilters,
} from '../../mocks/search';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { SearchResultCard } from '../../components/search/SearchResultCard';
import { SearchEmptyState } from '../../components/search/SearchEmptyState';
import { SearchFiltersPanel } from '../../components/search/SearchFiltersPanel';
import { SearchInput } from '../../components/search/SearchInput';
import { useSearchResults } from '../../hooks/useSearchResults';
import { ScreenLoader } from '../../components/common/ScreenLoader';
import { StateFeedback } from '../../components/common/StateFeedback';
import { CloudOff } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../routes/types';

export function SearchScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [query, setQuery] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>(searchInitialFilters);

  const tabBarHeight = useBottomTabBarHeight();

  const { data, isLoading, isError, refetch } = useSearchResults(query, filters);

  function toggleGenre(genre: string) {
    setFilters(current => {
      const alreadySelected = current.genres.includes(genre);

      return {
        ...current,
        genres: alreadySelected
          ? current.genres.filter(item => item !== genre)
          : [...current.genres, genre],
      };
    });
  }

  function setType(type: SearchMediaType) {
    setFilters(current => ({
      ...current,
      type,
    }));
  }

  function setMinimumRating(minimumRating: number) {
    setFilters(current => ({
      ...current,
      minimumRating,
    }));
  }

  function resetFilters() {
    setFilters(searchInitialFilters);
  }  

  function handlePressResult(item: SearchResultItem) {
    navigation.navigate('Details', { id: item.id, type: item.type });
  }

  const filtersSummary = [
    filters.type === 'all'
      ? 'All types'
      : filters.type === 'movie'
      ? 'Movies only'
      : 'TV shows only',
    filters.genres.length === 0
      ? 'All genres'
      : `${filters.genres.length} genre(s) selected`,
    filters.minimumRating === 0
      ? 'any rating'
      : `${filters.minimumRating}+ rating`,
  ].join(' • ');

  const results = data ?? [];

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: tabBarHeight + 24,
        }}
      >
        <SearchInput 
          value={query} 
          onChangeText={setQuery}
          onToggleFilters={() => setFiltersVisible(current => !current)}
        />

        <View style={styles.summaryCard}>
          <Text variant="titleMedium" style={styles.summaryTitle}>
            Active filters
          </Text>
          <Text variant="bodyMedium" style={styles.summaryText}>
            {filtersSummary}
          </Text>
        </View>

        {filtersVisible ? (
          <SearchFiltersPanel 
            filters={filters} 
            onSetType={setType} 
            onToggleGenre={toggleGenre} 
            onSetMinimumRating={setMinimumRating} 
            onReset={resetFilters} 
          /> 
        ) : null}

        {isLoading ? (
          <ScreenLoader label='Searching...'/>
        ) : isError ? (
          <StateFeedback 
            icon={CloudOff}
            title={"Search failed"}
            description='Something went wrong. Please try again.'
            actionLabel='Try again'
            onAction={refetch}
          />
        ) : results.length === 0 ? (
          <SearchEmptyState />
        ) : (
          <>
            <Text variant="titleMedium" style={styles.resultsTitle}>
              Results ({results.length})
            </Text>
          
            {results.map(item => (
              <SearchResultCard key={item.id} item={item} onPress={handlePressResult}/>
            ))}
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  summaryCard: {
    padding: spacing.lg,
    borderRadius: radius['2xl'],
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  summaryTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  summaryText: {
    color: colors.textPrimary,
    lineHeight: 22,
  },
  resultsTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});
