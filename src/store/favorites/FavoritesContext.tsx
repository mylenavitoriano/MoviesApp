import React, { createContext, Dispatch, useContext, useEffect, useReducer, useState } from "react";
import { FavoritesAction, favoritesReducer, FavoritesState } from "./favoritesReducer"
import { loadFavorites, saveFavorites } from "../../utils/storage";

type FavoritesContextValue = {
    state: FavoritesState;
    dispatch: Dispatch<FavoritesAction>;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

type Props = {
    children: React.ReactNode;
}

export function FavoritesProvider({ children }: Props) {
    const [state, dispatch] = useReducer(favoritesReducer, { items: [] });
    const [isReady, setIsReady] = useState(false);

    // Carrega favoritos salvos ao montar
    useEffect(() => {
        loadFavorites().then(savedItems => {
            if(savedItems.length > 0){
                savedItems.forEach(item => 
                    dispatch({ type: "ADD_FAVORITE", payload: item }),
                );
            }
            setIsReady(true)
        });
    }, []);

    // Salva sempre que a lista mudar
    useEffect(() => {
        if (!isReady) {
            return;
        }
        saveFavorites(state.items);
    }, [state.items, isReady])

    if (!isReady) {
        return null;
    }

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