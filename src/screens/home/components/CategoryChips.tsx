import { ScrollView, StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";
import { spacing } from "../../../theme/spacing";
import { colors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";

type Props = {
    items: string[];
    selected: string;
    onSelect: (value: string) => void;
}

export function CategoryChips({ items, selected, onSelect }: Props) {
    return(
        <View style={styles.wrapper}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {items.map(item => {
                    const isSelected = selected === item;

                    return(
                        <Chip
                            key={item}
                            selected={isSelected}
                            onPress={() => onSelect(item)}
                            showSelectedCheck={false}
                            style={[
                                styles.chip,
                                isSelected ? styles.chipActive : styles.chipInactive,
                            ]}
                            textStyle={[
                                styles.chipText,
                                isSelected ? styles.chipTextActive : styles.chipTextInactive,
                            ]}
                        >
                            {item}
                        </Chip>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: spacing.xl
    },
    content: {
        paddingRight: spacing.lg
    },
    chip: {
        marginRight: spacing.sm,
        height: 44,
        justifyContent: 'center',
        borderRadius: radius.full
    },
    chipActive: {
        backgroundColor: colors.chipActiveBg,
    },
    chipInactive: {
        backgroundColor: colors.chipInactiveBg
    },
    chipText: {
        fontSize: 14,
    },
    chipTextActive: {
        color: colors.chipActiveText,
    },
    chipTextInactive: {
        color: colors.chipInactiveText,
    },
})