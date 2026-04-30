import { Button, Text } from 'react-native-paper';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { StyleSheet, View } from 'react-native';

type Props = {
    onExplore: () => void;
};

export function FavoritesEmptyState({ onExplore }: Props) {
  return (
    <View style={styles.emptyCard}>

        <Text variant="titleLarge" style={styles.emptyTitle}>
            No favorites yet
        </Text>

        <Text variant="bodyLarge" style={styles.emptyDescription}>
            Start exploring and save the movie and series you love.
        </Text>

        <Button
            mode="contained"
            onPress={onExplore}
            style={styles.button}
            labelStyle={styles.buttonLabel}
        >
            Explore catalog
        </Button>
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
    button: {
        borderRadius: radius.full,
    },
    buttonLabel: {
        paddingHorizontal: spacing.md,
    },
});
