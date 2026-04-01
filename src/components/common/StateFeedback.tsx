import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme/colors';
import { Button, Text } from 'react-native-paper';
import { spacing } from '../../theme/spacing';
import { LucideIcon } from 'lucide-react-native';

type StateFeedbackProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function StateFeedback({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: StateFeedbackProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Icon size={40} color={colors.textPrimary} strokeWidth={1.8} />

        <Text variant="headlineSmall" style={styles.title}>
          {title}
        </Text>

        <Text variant="bodyLarge" style={styles.description}>
          {description}
        </Text>

        {actionLabel && onAction ? (
          <Button
            mode="contained"
            onPress={onAction}
            contentStyle={styles.buttonContent}
          >
            {actionLabel}
          </Button>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  card: {
    alignItems: 'center',
    padding: spacing.xl,
    borderRadius: 24,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  description: {
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  buttonContent: {
    paddingHorizontal: spacing.sm,
  },
});
