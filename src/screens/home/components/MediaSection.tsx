import { FlatList, StyleSheet, View } from "react-native";
import { MediaListItem } from "../../../types/media";
import { MediaPosterCard } from "../../../components/media/MediaPosterCard";
import { spacing } from "../../../theme/spacing";
import { SectionHeader } from "../../../components/common/SectionHeader";

type Props = {
    title: string;
    items: MediaListItem[];
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
    listContent: {
        paddingRight: spacing.lg,
        marginTop: spacing.sm
    }
})