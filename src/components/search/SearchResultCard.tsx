import { Text } from 'react-native-paper';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { RatingRow } from '../common/RatingRow';
import { SearchResultItem } from '../../types/search';

type Props = {
    item: SearchResultItem;
  onPress: (item: SearchResultItem) => void;
};

export function SearchResultCard({ item, onPress }: Props) {
  return (
    <Pressable key={item.id} style={styles.resultCard} onPress={() => onPress(item)}>
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
  );
}

const styles = StyleSheet.create({
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
});
