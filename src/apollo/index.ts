import { Category } from './../types/graphql'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import id from 'date-fns/locale/id'

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
