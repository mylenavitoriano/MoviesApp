import { Text } from 'react-native-paper';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { StyleSheet, View } from 'react-native';
import { SearchX } from 'lucide-react-native';

export function SearchEmptyState() {
  return (
    <View style={styles.emptyCard}>
        <SearchX size={36} color={colors.textPrimary} strokeWidth={1.8} />

        <Text variant="titleLarge" style={styles.emptyTitle}>
            No results found
        </Text>

        <Text variant="bodyLarge" style={styles.emptyDescription}>
            Try a different title or reset your active filters
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    emptyCard: {
        alignItems: 'center',
        padding: spacing['2xl'],
        borderRadius: radius['2xl'],
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
    },
    emptyTitle: {
        color: colors.textPrimary,
        marginTop: spacing.md,
        marginBottom: spacing.xs,
        textAlign: 'center',
    },
    emptyDescription: {
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
    },
});
