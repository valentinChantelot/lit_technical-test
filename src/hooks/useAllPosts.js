import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS, POSTS_COUNT } from '../apollo/queries/index'

export const useAllPosts = (page, perPage = -1) => {
    const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
        variables: {
            page: page,
            perPage: perPage,
        },
    })
    const allPosts = data?.allPosts ?? []

    const { data: count } = useQuery(POSTS_COUNT)
    const numberOfPosts = count?._allPostsMeta?.count ?? 0

    return { loading, error, allPosts, numberOfPosts, fetchMore }
}
