import { MediaListItem } from "../types/media";
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = "@moviesapp:favorites";

export async function saveFavorites(items: MediaListItem[]): Promise<void> {
    try {
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
    } catch (error) {
        console.log("Error saving favorites: ", error);
    }
}

export async function loadFavorites(): Promise<MediaListItem[]> {
    try {
        const raw = await AsyncStorage.getItem(FAVORITES_KEY);
        if (!raw) {
            return [];
        }
        return JSON.parse(raw) as MediaListItem[];
    } catch (error) {
        console.log("Error loading favorites: ", error);
        return []
    }
}