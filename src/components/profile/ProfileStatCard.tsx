import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";
type Props = {
    value: number;
    label: string;
};
  
export function ProfileStatCard({ value, label }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.value}>{value}</Text>
            <Text variant="bodySmall" style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: spacing.lg,
        backgroundColor: colors.surface,
        borderRadius: radius['2xl'],
        borderWidth: 1,
        borderColor: colors.border
    },
    value: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.textPrimary,
        marginBottom: spacing.xs
    },
    label: {
        color: colors.textSecondary
    },
})