import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Tabs: undefined;
    Details: { id: string };
}

export type RootTabParamList = {
    Home: undefined;
    Search: undefined;
    Favorites: undefined;
    Profile: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type DetailsRoutProp = RouteProp<RootStackParamList, 'Details'>