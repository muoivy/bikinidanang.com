import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

if (!endpoint) {
  throw new Error('Missing NEXT_PUBLIC_WP_GRAPHQL_URL in environment variables.');
}

export const wpClient = new GraphQLClient(endpoint, {
  headers: process.env.WP_API_TOKEN
    ? {
        Authorization: `Bearer ${process.env.WP_API_TOKEN}`,
      }
    : undefined,
});
