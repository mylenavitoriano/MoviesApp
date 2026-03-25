import { ImageBackground, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

import { FeaturedItem } from "../../../types/media"
import { spacing } from "../../../theme/spacing"
import { radius } from "../../../theme/radius"
import { colors } from "../../../theme/colors"

type Props = {
    item: FeaturedItem
}

export function FeaturedBanner({ item }: Props) {
    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={{ uri: item.imageUrl }}
                imageStyle={styles.image}
                style={styles.banner}
            >
                <View style={styles.overlay}>
                    <Text variant="headlineMedium" style={styles.title}>
                        {item.title}
                    </Text>
                </View>
            </ImageBackground>

            <View style={styles.dots}>
                <View style={[styles.dot, styles.dotActive]}/>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: spacing['2xl']
    },
    banner: {
        height: 190,
        justifyContent: 'flex-end'
    },
    image: {
        borderRadius: radius['2xl']
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: spacing.xl,
        backgroundColor: 'rgba(0,0,0,0.18)',
        borderRadius: radius['2xl']
    },
    title: {
        color: colors.textPrimary,
    },
    dots: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: spacing.md
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: colors.textMuted,
        marginHorizontal: 4
    },
    dotActive: {
        backgroundColor: colors.textPrimary
    },
})