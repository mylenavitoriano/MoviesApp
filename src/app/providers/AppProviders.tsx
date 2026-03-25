import React, { PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { appTheme } from '@/theme/paper-theme';

const queryClient = new QueryClient();

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={appTheme}>
          <StatusBar barStyle="light-content" backgroundColor="#0e1518" />
          {children}
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}