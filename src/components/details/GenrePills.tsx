import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

type Props = {
  items: string[];
};

export function GenrePills({ items }: Props) {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Chip key={item} compact style={styles.chip} textStyle={styles.text}>
          {item}
        </Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  chip: {
    backgroundColor: colors.surfaceAlt,
  },
  text: {
    color: colors.textSecondary,
  },
});
