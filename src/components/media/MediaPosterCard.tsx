import { Image, Pressable, StyleSheet } from "react-native";
import { MediaCardItem } from "../../types/media"
import { Text } from "react-native-paper";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";
import { RatingRow } from "../common/RatingRow";

type Props = {
    item: MediaCardItem;
}

export function MediaPosterCard({ item }: Props) {
    return (
        <Pressable style={styles.container}>
            <Image source={{ uri: item.posterUrl }} style={styles.poster} />

            <Text variant="titleMedium" numberOfLines={2} style={styles.title}>
                {item.title}
            </Text>

            <RatingRow
                year={item.year}
                label={item.type === 'movie' ? 'Movie' : 'TV'}
                rating={item.rating}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        marginRight: spacing.lg
    },
    poster: {
        width: "100%",
        height: 220,
        borderRadius: radius['2xl'],
        backgroundColor: colors.surfaceSoft,
        marginBottom: spacing.md
    },
    title: {
        color: colors.textPrimary,
        marginBottom: spacing.xs
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    meta: {
        color: colors.textSecondary
    },
    star: {
        marginLeft: 6,
        marginRight: 4,
    },
})