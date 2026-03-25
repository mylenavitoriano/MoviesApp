import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '@/theme/colors';

type Props = {
  title: string;
  actionLabel?: string;
};

export function SectionHeader({ title, actionLabel = 'See all' }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        {title}
      </Text>

      <Text variant="bodyLarge" style={styles.action}>
        {actionLabel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.textPrimary,
  },
  action: {
    color: colors.textSecondary,
  },
});