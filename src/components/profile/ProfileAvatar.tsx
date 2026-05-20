import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";

type Props = {
    name: string;
    email: string;
    memberSince: string
};

function getInitials(name: string): string {
    return name
        .split(' ')
        .slice(0, 2)
        .map(part => part[0])
        .join('')
        .toUpperCase();
}
  
export function ProfileAvatar({ name, email, memberSince }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.initials}>{getInitials(name)}</Text>
            </View>
            <Text variant="titleLarge" style={styles.name}>{name}</Text>
            <Text variant="bodyMedium" style={styles.email}>{email}</Text>
            <Text variant="bodySmall" style={styles.memberSince}>{memberSince}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: spacing['2xl'],
    },
    avatar: {
        width: 88,
        height: 88,
        borderRadius: radius.full,
        backgroundColor: colors.surfaceAlt,
        borderWidth: 2,
        borderColor: colors.outline,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: spacing.md
    },
    initials: {
        fontSize: 32,
        fontWeight: '700',
        color: colors.textPrimary,
    },
    name: {
        color: colors.textPrimary,
        marginBottom: spacing.xs
    },
    email: {
        color: colors.textSecondary,
        marginBottom: spacing.xs
    },
    memberSince: {
        color: colors.textMuted,
    },
})