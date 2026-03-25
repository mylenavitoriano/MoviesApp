import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Heart, House, Search, UserRound } from 'lucide-react-native';

import { colors } from '../theme/colors';
import { radius } from '../theme/radius';

function renderTabIcon(routeName: string, color: string) {
  const size = 22;
  const strokeWidth = 2.2;

  switch (routeName) {
    case 'Home':
      return <House color={color} size={size} strokeWidth={strokeWidth} />;
    case 'Search':
      return <Search color={color} size={size} strokeWidth={strokeWidth} />;
    case 'Favorites':
      return <Heart color={color} size={size} strokeWidth={strokeWidth} />;
    case 'Profile':
      return <UserRound color={color} size={size} strokeWidth={strokeWidth} />;
    default:
      return null;
  }
}

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 16) }]}
    >
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const color = isFocused ? colors.textPrimary : colors.textSecondary;

          const options = descriptors[route.key].options;

          const labelContent =
            typeof options.tabBarLabel === 'function'
              ? options.tabBarLabel({
                  focused: isFocused,
                  color,
                  position: 'below-icon',
                  children: route.name,
                })
              : typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : typeof options.title === 'string'
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
              {renderTabIcon(route.name, color)}
              {typeof labelContent === 'string' ? (
                <Text style={[styles.tabLabel, { color }]}>{labelContent}</Text>
              ) : (
                labelContent
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: 'center',
  },
  tabBar: {
    width: '90%',
    maxWidth: 380,
    height: 72,
    borderRadius: radius.full,
    backgroundColor: '#1b242b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 12,
  },
});
