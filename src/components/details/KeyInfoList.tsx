import { StyleSheet, View } from 'react-native';
import { DetailKeyInfoItem } from '../../types/details';
import { Clock3, MicVocal, ScrollText, Ticket } from 'lucide-react-native';
import { colors } from '../../theme/colors';
import { Text } from 'react-native-paper';
import { spacing } from '../../theme/spacing';

type Props = {
  items: DetailKeyInfoItem[];
};

const icons = [Clock3, Ticket, MicVocal, ScrollText];

export function KeyInfoList({ items }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Key Info
      </Text>

      {items.map((item, index) => {
        const Icon = icons[index] ?? ScrollText;

        return (
          <View key={item.id} style={styles.row}>
            <Icon size={20} color={colors.textSecondary} strokeWidth={2} />
            <Text variant="titleMedium" style={styles.label}>
              {item.label}
            </Text>
            <Text variant="bodyLarge" style={styles.value}>
              {item.value}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  title: {
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  label: {
    color: colors.textPrimary,
    marginLeft: spacing.md,
    minWidth: 90,
  },
  value: {
    color: colors.textSecondary,
    flex: 1,
  },
});
