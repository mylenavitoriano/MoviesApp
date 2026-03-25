import { FlatList, StyleSheet, View } from "react-native";
import { MediaCardItem } from "../../../types/media";
import { MediaPosterCard } from "../../../components/media/MediaPosterCard";
import { spacing } from "../../../theme/spacing";
import { colors } from "../../../theme/colors";
import { SectionHeader } from "../../../components/common/SectionHeader";

type Props = {
    title: string;
    items: MediaCardItem[];
}

export function MediaSection({ title, items }: Props) {
    return (
        <View style={styles.container}>
            <SectionHeader title={title} />

            <FlatList 
                horizontal
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <MediaPosterCard item={item} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing['2xl']
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: spacing.lg
    },
    title: {
        color: colors.textPrimary
    },
    link: {
        color: colors.textSecondary
    },
    listContent: {
        paddingRight: spacing.lg
    }
})