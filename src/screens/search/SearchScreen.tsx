import { Text, TextInput } from 'react-native-paper';
import { Screen } from '../../components/common/Screen';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';
import { SearchFilters, SearchMediaType } from '../../types/search';
import { useState } from 'react';
import {
  searchGenresMock,
  searchInitialFilters,
  searchRatingOptions,
  searchResultsMock,
} from '../../mocks/search';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Search, SearchX, SlidersHorizontal } from 'lucide-react-native';
import { AppIconButton } from '../../components/common/AppIconButton';
import { RatingRow } from '../../components/common/RatingRow';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';

const typeOptions: { label: string; value: SearchMediaType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Movies', value: 'movie' },
  { label: 'TV Shows', value: 'tv' },
];

export function SearchScreen() {
  const [query, setQuery] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>(searchInitialFilters);

  const tabBarHeight = useBottomTabBarHeight();

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

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResults = searchResultsMock.filter(item => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      item.title.toLowerCase().includes(normalizedQuery);

    const matchesType = filters.type === 'all' || item.type === filters.type;

    const matchesGenres =
      filters.genres.length === 0 ||
      filters.genres.every(genre => item.genres.includes(genre));

    const matchesRating = item.rating >= filters.minimumRating;

    return matchesQuery && matchesType && matchesGenres && matchesRating;
  });

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

  return (
    <Screen style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: tabBarHeight + 24,
        }}
      >
        <Text variant="headlineMedium" style={styles.title}>
          Search
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Find movies and series with local mock filters.
        </Text>

        <View style={styles.searchRow}>
          <View style={styles.inputWrapper}>
            <Search size={20} color={colors.textSecondary} strokeWidth={2} />

            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search movies or series"
              placeholderTextColor={colors.placeholder}
              style={styles.input}
            />
          </View>

          <AppIconButton
            icon={SlidersHorizontal}
            onPress={() => setFiltersVisible(current => !current)}
          />
        </View>

        <View style={styles.summaryCard}>
          <Text variant="titleMedium" style={styles.summaryTitle}>
            Active filters
          </Text>
          <Text variant="bodyMedium" style={styles.summaryText}>
            {filtersSummary}
          </Text>
        </View>

        {filtersVisible ? (
          <View style={styles.filtersCard}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Type
            </Text>

            <View style={styles.chipsRow}>
              {typeOptions.map(option => {
                const active = filters.type === option.value;

                return (
                  <Pressable
                    key={option.value}
                    onPress={() => setType(option.value)}
                    style={[styles.chip, active && styles.chipActive]}
                  >
                    <Text
                      variant="labelLarge"
                      style={[styles.chipText, active && styles.chipTextActive]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Text variant="titleMedium" style={styles.sectionTitle}>
              Genres
            </Text>

            <View style={styles.chipsRow}>
              {searchGenresMock.map(genre => {
                const active = filters.genres.includes(genre);

                return (
                  <Pressable
                    key={genre}
                    onPress={() => toggleGenre(genre)}
                    style={[styles.chip, active && styles.chipActive]}
                  >
                    <Text
                      variant="labelLarge"
                      style={[styles.chipText, active && styles.chipTextActive]}
                    >
                      {genre}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Text variant="titleMedium" style={styles.sectionTitle}>
              Minimum Rating
            </Text>

            <View style={styles.chipsRow}>
              {searchRatingOptions.map(option => {
                const active = filters.minimumRating === option;

                return (
                  <Pressable
                    key={option}
                    onPress={() => setMinimumRating(option)}
                    style={[styles.chip, active && styles.chipActive]}
                  >
                    <Text
                      variant="labelLarge"
                      style={[styles.chipText, active && styles.chipTextActive]}
                    >
                      {option === 0 ? 'Any' : `${option}+`}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Pressable onPress={resetFilters} style={styles.clearButton}>
              <Text variant="labelLarge" style={styles.clearButtonText}>
                Clear filters
              </Text>
            </Pressable>
          </View>
        ) : null}

        <Text variant="titleMedium" style={styles.resultsTitle}>
          Results ({filteredResults.length})
        </Text>

        {filteredResults.length === 0 ? (
          <View style={styles.emptyCard}>
            <SearchX size={36} color={colors.textPrimary} strokeWidth={1.8} />

            <Text variant="titleLarge" style={styles.emptyTitle}>
              No results found
            </Text>

            <Text variant="bodyLarge" style={styles.emptyDescription}>
              Try a different title or reset your active filters
            </Text>
          </View>
        ) : (
          filteredResults.map(item => (
            <Pressable key={item.id} style={styles.resultCard}>
              <Image source={{ uri: item.posterUrl }} style={styles.poster} />

              <View style={styles.resultContent}>
                <View>
                  <Text
                    variant="titleMedium"
                    numberOfLines={2}
                    style={styles.resultTitle}
                  >
                    {item.title}
                  </Text>

                  <RatingRow
                    year={item.year}
                    label={item.type === 'movie' ? 'Movie' : 'TV Show'}
                    rating={item.rating}
                  />
                </View>

                <Text
                  variant="bodyMedium"
                  numberOfLines={2}
                  style={styles.genresText}
                >
                  {item.genres.join(' • ')}
                </Text>
              </View>
            </Pressable>
          ))
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
  searchRow: {
    flexDirection: 'row',
    gap: spacing.xl,
    marginBottom: spacing.lg,
  },
  inputWrapper: {
    flex: 1,
    height: 56,
    borderRadius: radius.xl,
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: spacing.md,
    color: colors.textPrimary,
    fontSize: 16,
    paddingVertical: 0,
    backgroundColor: colors.inputBg,
    borderTopWidth: 1,
    borderTopColor: colors.inputBorder,
    borderRightWidth: 0,
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
  filtersCard: {
    padding: spacing.lg,
    borderRadius: radius['2xl'],
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  chip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.chipInactiveBg,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  chipActive: {
    backgroundColor: colors.chipActiveBg,
    borderColor: colors.chipActiveBg,
  },
  chipText: {
    color: colors.chipInactiveText,
  },
  chipTextActive: {
    color: colors.chipActiveText,
  },
  clearButton: {
    alignSelf: 'flex-start',
  },
  clearButtonText: {
    color: colors.textSecondary,
  },
  resultsTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  resultCard: {
    flexDirection: 'row',
    padding: spacing.md,
    borderRadius: radius['2xl'],
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  poster: {
    width: 92,
    height: 132,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceSoft,
  },
  resultContent: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: 'space-between',
  },
  resultTitle: {
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  genresText: {
    color: colors.textSecondary,
    lineHeight: 22,
    marginTop: spacing.md,
  },
  emptyCard: {
    alignItems: 'center',
    padding: spacing['2xl'],
    borderRadius: radius['2xl'],
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emptyTitle: {
    color: colors.textPrimary,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  emptyDescription: {
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
