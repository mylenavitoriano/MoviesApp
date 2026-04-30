import { Text } from 'react-native-paper';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { RatingRow } from '../common/RatingRow';
import { MediaListItem } from '../../types/media';
import { AppIconButton } from '../common/AppIconButton';
import { Trash2 } from 'lucide-react-native';

type Props = {
    item: MediaListItem;
    onPress: (item: MediaListItem) => void;
    onRemove: (item: MediaListItem) => void;
};

export function FavoriteCard({ item, onPress, onRemove }: Props) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item)}>
        <Image source={{ uri: item.posterUrl }} style={styles.poster} />

        <View style={styles.content}>
            <View>
                <Text
                    variant="titleMedium"
                    numberOfLines={2}
                    style={styles.title}
                >
                    {item.title}
                </Text>

                <RatingRow
                    year={item.year}
                    label={item.type === 'movie' ? 'Movie' : 'TV Show'}
                    rating={item.rating}
                />
            </View>
        </View>

        <AppIconButton 
            icon={Trash2}
            onPress={() => onRemove(item)}
        />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
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
      content: {
        flex: 1,
        marginLeft: spacing.md,
        justifyContent: 'center',
      },
      title: {
        color: colors.textPrimary,
        marginBottom: spacing.sm,
      },
});
