import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Star } from 'lucide-react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { formatRating } from '../../utils/media';

type Props = {
  year: number;
  label?: string;
  rating: number;
};

export function RatingRow({ year, label, rating }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="bodyMedium" style={styles.text}>
        {year}
      </Text>

      {label ? (
        <Text variant="bodyMedium" style={styles.text}>
          {' '}
          • {label}
        </Text>
      ) : null}

      <View style={styles.rating}>
        <Star size={14} color={colors.rating} strokeWidth={2} />
        <Text variant="bodyMedium" style={styles.text}>
          {formatRating(rating)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: colors.textSecondary,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.sm,
    gap: 4,
  },
});
