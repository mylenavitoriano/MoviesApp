import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { SearchFilters, SearchMediaType } from '../../types/search';
import { searchGenresMock, searchRatingOptions } from '../../mocks/search';

const typeOptions: { label: string; value: SearchMediaType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Movies', value: 'movie' },
  { label: 'TV Shows', value: 'tv' },
];

type Props = {
  filters: SearchFilters;
  onSetType: (type: SearchMediaType) => void;
  onToggleGenre: (genre: string) => void;
  onSetMinimumRating: (rating: number) => void;
  onReset: () => void;
};

export function SearchFiltersPanel({ filters, onSetType, onToggleGenre, onSetMinimumRating, onReset }: Props) {

  return (
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
              onPress={() => onSetType(option.value)}
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
              onPress={() => onToggleGenre(genre)}
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
              onPress={() => onSetMinimumRating(option)}
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

      <Pressable onPress={onReset} style={styles.clearButton}>
        <Text variant="labelLarge" style={styles.clearButtonText}>
          Clear filters
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
