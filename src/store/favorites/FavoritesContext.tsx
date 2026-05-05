import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { FavoritesAction, favoritesReducer, FavoritesState } from "./favoritesReducer"
import { favoriteItems } from "../../mocks/favorites";

type FavoritesContextValue = {
    state: FavoritesState;
    dispatch: Dispatch<FavoritesAction>;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

type Props = {
    children: React.ReactNode;
}

export function FavoritesProvider({ children }: Props) {
    const [state, dispatch] = useReducer(favoritesReducer, {
        items: favoriteItems,
    });

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            { children }
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    const context = useContext(FavoritesContext);

    if(!context) {
        throw new Error('useFavoritesContext must be used within FavoritesProvider')
    }
    
    return context;
}