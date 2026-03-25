import { MD3DarkTheme, configureFonts } from 'react-native-paper';
import { colors } from './colors';

const fontConfig = {
  displayLarge: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700' as const,
  },
  displayMedium: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700' as const,
  },
  displaySmall: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700' as const,
  },
  headlineLarge: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700' as const,
  },
  headlineMedium: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600' as const,
  },
  headlineSmall: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600' as const,
  },
  titleLarge: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600' as const,
  },
  titleMedium: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500' as const,
  },
  titleSmall: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500' as const,
  },
  bodyLarge: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400' as const,
  },
  bodyMedium: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400' as const,
  },
  bodySmall: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400' as const,
  },
  labelLarge: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500' as const,
  },
  labelMedium: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500' as const,
  },
  labelSmall: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500' as const,
  },
};

export const appTheme = {
  ...MD3DarkTheme,
  roundness: 6,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3DarkTheme.colors,
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
    background: colors.background,
    surface: colors.surface,
    surfaceVariant: colors.surfaceAlt,
    onPrimary: colors.background,
    onSecondary: colors.textPrimary,
    onBackground: colors.textPrimary,
    onSurface: colors.textPrimary,
    outline: colors.outline,
    error: colors.danger,
  },
};