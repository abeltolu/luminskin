import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://pangaea-interviews.vercel.app/api/graphql',
    cache: new InMemoryCache(),
});
