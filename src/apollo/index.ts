import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_SERVER_ENDPOINT,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    allPosts: {
                        keyArgs: false,
                        merge(existing = [], incoming) {
                            return [...existing, ...incoming]
                        },
                    },
                    Category: {
                        keyArgs: false,
                    },
                },
            },
        },
    }),
})

export default client
