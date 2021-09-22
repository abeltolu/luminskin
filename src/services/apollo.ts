import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

export const apolloClient = new ApolloClient({
    uri: 'https://pangaea-interviews.vercel.app/api/graphql',
    cache: cache,
});
