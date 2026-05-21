import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Tabs: NavigatorScreenParams<RootTabParamList>;
    Details: { id: string, type: "movie" | "tv" };
    EditProfile: undefined;
}

export type RootTabParamList = {
    Home: undefined;
    Search: undefined;
    Favorites: undefined;
    Profile: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type DetailsRoutProp = RouteProp<RootStackParamList, 'Details'>