import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      gcTime: 10 * 60 * 1000,
    },
  },
})
