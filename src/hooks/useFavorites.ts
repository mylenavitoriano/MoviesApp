import { useFavoritesContext } from "../store/favorites/FavoritesContext";
import { MediaListItem } from "../types/media";

export function useFavorites() {
    const { state, dispatch } = useFavoritesContext();

    function addFavorite(item: MediaListItem) {
        dispatch({ type: "ADD_FAVORITE", payload: item })
    }

    function removeFavorite(id: string) {
        dispatch({ type: "REMOVE_FAVORITE", payload: { id } });
    }

    function isFavorite(id: string): boolean {
        return state.items.some(item => item.id === id);
    }

    return {
        favorites: state.items,
        addFavorite, 
        removeFavorite,
        isFavorite
    }
}