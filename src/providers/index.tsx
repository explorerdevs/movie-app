import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../lib';
import { router } from '../routes';

const Providers = () => {
  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
            staleTime: 1000 * 60 * 3, // 2 min
            retry: 1,
            refetchOnMount: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export { Providers };
