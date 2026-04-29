import { TextInput } from 'react-native-paper';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { AppIconButton } from '../common/AppIconButton';
import { StyleSheet, View } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onToggleFilters: () => void;
};

export function SearchInput({ value, onChangeText, onToggleFilters }: Props) {
  return (
    <View style={styles.searchRow}>
        <View style={styles.inputWrapper}>
            <Search size={20} color={colors.textSecondary} strokeWidth={2} />

            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Search movies or series"
                placeholderTextColor={colors.placeholder}
                style={styles.input}
            />
        </View>

        <AppIconButton
            icon={SlidersHorizontal}
            onPress={onToggleFilters}
        />
  </View>
  );
}

const styles = StyleSheet.create({
    searchRow: {
        flexDirection: 'row',
        gap: spacing.xl,
        marginBottom: spacing.lg,
      },
      inputWrapper: {
        flex: 1,
        height: 56,
        borderRadius: radius.xl,
        backgroundColor: colors.inputBg,
        borderWidth: 1,
        borderColor: colors.inputBorder,
        paddingHorizontal: spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        marginLeft: spacing.md,
        color: colors.textPrimary,
        fontSize: 16,
        paddingVertical: 0,
        backgroundColor: colors.inputBg,
        borderTopWidth: 1,
        borderTopColor: colors.inputBorder,
        borderRightWidth: 0,
      },
});
