import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@/screens/home/HomeScreen';
// import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { FavoritesScreen } from '../screens/favorites/FavoritesScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { DetailsScreen } from '@/screens/details/DetailsScreen';
import { colors } from '../theme/colors';
import { CustomTabBar } from './CustomTabBar';

type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
