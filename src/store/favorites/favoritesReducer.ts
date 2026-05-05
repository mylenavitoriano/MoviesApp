import { MediaListItem } from "../../types/media";

export type FavoritesState = {
    items: MediaListItem[];
};

export type FavoritesAction = 
    | { type: "ADD_FAVORITE"; payload: MediaListItem }
    | { type: "REMOVE_FAVORITE"; payload: { id: string } };

export function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
    switch (action.type) {
        case "ADD_FAVORITE": {
            const alreadyExists = state.items.some(
                item => item.id === action.payload.id,
            );
            if(alreadyExists) {
                return state;
            }
            return { ...state, items: [...state.items, action.payload] };
        }

        case "REMOVE_FAVORITE": {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        }

        default: 
            return state
    }
}