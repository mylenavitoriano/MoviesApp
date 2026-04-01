import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme/colors';
import { ActivityIndicator, Text } from 'react-native-paper';
import { spacing } from '../../theme/spacing';

type Props = {
  label?: string;
};

export function ScreenLoader({ label = 'Loading content...' }: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size={'large'} color={colors.textPrimary} />

      <Text variant="bodyLarge" style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  label: {
    marginTop: spacing.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
