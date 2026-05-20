import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { ChevronRight, LucideIcon } from "lucide-react-native";

type Props = {
    icon: LucideIcon;
    label: string;
    value?: string;
    onPress: () => void;
    danger?: boolean;
};
  
export function ProfileMenuRow({ 
    icon: Icon,
    label,
    value,
    onPress,
    danger = false, 
}: Props) {
    const tint = danger ? colors.danger : colors.textPrimary;

    return (
        <Pressable style={styles.row} onPress={onPress}>
            <View style={styles.left}>
                <Icon size={20} color={tint} strokeWidth={2}/>
                <Text variant="bodyLarge" style={[styles.label, { color: tint }]}>
                    {label}
                </Text>
            </View>
            <View style={styles.right}>
                {value && (
                    <Text variant="bodyMedium" style={styles.value}>
                        {value}
                    </Text>
                )}
                <ChevronRight size={18} color={colors.textMuted} strokeWidth={2} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm
    },
    label: {
        color: colors.textPrimary
    },
    value: {
        color: colors.textSecondary,
    },
    
})