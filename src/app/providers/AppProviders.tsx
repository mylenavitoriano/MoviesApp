import React, { PropsWithChildren } from 'react';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { appTheme } from '@/theme/paper-theme';
import { FavoritesProvider } from '../../store/favorites/FavoritesContext';

const queryClient = new QueryClient();

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <PaperProvider theme={appTheme}>
            {children}
          </PaperProvider>
        </FavoritesProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}