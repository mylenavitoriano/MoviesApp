import { Text } from "react-native-paper";
import { Screen } from "../../components/common/Screen";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export function ProfileScreen() {
    return (
        <Screen style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>
                Profile
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
                Profile screen placeholder
            </Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    title: {
        color: colors.textPrimary,
    },
    subtitle: {
        color: colors.textSecondary,
    },
})