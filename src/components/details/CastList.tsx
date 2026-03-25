import { FlatList, Image, StyleSheet, View } from 'react-native';
import { CastMember } from '../../types/details';
import { Text } from 'react-native-paper';
import { SectionHeader } from '../common/SectionHeader';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

type Props = {
  items: CastMember[];
};

function CastCard({ item }: { item: CastMember }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
      <Text variant="bodyMedium" style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>
    </View>
  );
}

export function CastList({ items }: Props) {
  return (
    <View style={styles.container}>
      <SectionHeader title="Cast" />
      <FlatList
        horizontal
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CastCard item={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  listContent: {
    paddingTop: spacing.lg,
    paddingRight: spacing.lg,
  },
  card: {
    width: 88,
    marginRight: spacing.lg,
    alignItems: 'center',
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 999,
    backgroundColor: colors.surfaceSoft,
    marginBottom: spacing.sm,
  },
  name: {
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
