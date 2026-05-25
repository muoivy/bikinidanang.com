import { GraphQLClient } from "graphql-request";

if (!process.env.NEXT_PUBLIC_WP_GRAPHQL_URL) {
  throw new Error(
    "NEXT_PUBLIC_WP_GRAPHQL_URL is not defined. " +
      "Please add it to your .env.local file."
  );
}

/**
 * Singleton GraphQL client for WordPress/WooCommerce.
 * Uses graphql-request under the hood.
 *
 * Usage:
 *   import { wpClient } from "@/shared/lib/graphql/client"
 *   const data = await wpClient.request(QUERY, variables)
 */
export const wpClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL,
  {
    headers: {
      "Content-Type": "application/json",
    },
    // Next.js fetch options — revalidate every 60s by default
    // Override per-query by passing fetch options in request()
    fetch: (url, options) =>
      fetch(url, {
        ...options,
        next: { revalidate: 60 },
      }),
  }
);

/**
 * Authenticated client — for admin/preview operations.
 * Uses WP application password or JWT.
 */
export function getAuthenticatedClient(token: string): GraphQLClient {
  return new GraphQLClient(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
