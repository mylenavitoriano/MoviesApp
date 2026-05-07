import { LucideIcon } from "lucide-react-native"
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";

type Props = {
    icon: LucideIcon;
    onPress?: () => void;
    size?: number;
    style?: ViewStyle;
    fill?: string
};

export function AppIconButton({
    icon: Icon,
    onPress,
    size = 22,
    style,
    fill
}: Props) {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <Icon size={size} color={colors.textPrimary} strokeWidth={2} fill={fill}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: radius.xl,
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
});