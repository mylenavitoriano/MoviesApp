import { Screen } from "../../components/common/Screen";
import { ScrollView, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../routes/types";
import { MediaListItem } from "../../types/media";
import { FavoriteCard } from "../../components/favorites/FavoriteCard";
import { Text } from "react-native-paper";
import { spacing } from "../../theme/spacing";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FavoritesEmptyState } from "../../components/favorites/FavoritesEmptyState";
import { useFavorites } from "../../hooks/useFavorites";

export function FavoritesScreen() {
    const { favorites, removeFavorite } = useFavorites();

    const navigation = useNavigation<RootStackNavigationProp>();
    const tabBarHeight = useBottomTabBarHeight();

    function handlePress(item: MediaListItem) {
        navigation.navigate('Details', { id: item.id, type: item.type });
    }

    function handleRemove(item: MediaListItem) {
        removeFavorite(item.id)
    }

    function handleExplore() {
        navigation.navigate('Tabs', { screen: 'Search' });
      }

    return (
        <Screen style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                paddingBottom: tabBarHeight + 24,
                }}
            >
                <Text variant="headlineMedium" style={styles.title}>
                    Favorites
                </Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                    {favorites.length > 0
                    ? `${favorites.length} saved item${favorites.length > 1 ? 's' : ''}`
                    : 'Your saved content will appear here.'}
                </Text>

                {favorites.length === 0 ? (
                    <FavoritesEmptyState onExplore={handleExplore}/>
                ) : (
                    favorites.map(item => (
                        <FavoriteCard key={item.id} item={item} onPress={handlePress} onRemove={handleRemove}/>
                    ))
                )}
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
    },
    title: {
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },
    subtitle: {
        color: colors.textSecondary,
        marginBottom: spacing.xl,
    },
})