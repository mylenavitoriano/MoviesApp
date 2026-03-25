import { Text } from "react-native-paper";
import { Screen } from "../../components/common/Screen";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export function SearchScreen() {
    return (
        <Screen style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>
                Search
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
                Search screen placeholder
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