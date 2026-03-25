import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { radius } from "../../../theme/radius";

import { Search, Settings2 } from 'lucide-react-native';
import { AppIconButton } from "../../../components/common/AppIconButton";


type Props = {
    value: string;
    onChangeText: (value: string) => void;
}

export function HomeSearchBar({ value, onChangeText }: Props){
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Search size={22} color={colors.textSecondary} />

                <TextInput 
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Movies, series, shows..."
                    placeholderTextColor={colors.placeholder}
                    style={styles.input}
                />
            </View>

            <AppIconButton icon={Settings2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: spacing.md,
        marginBottom: spacing.xl
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
        paddingVertical: 0
    }
})