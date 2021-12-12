import { useState } from 'react'
import { useQuery } from '@apollo/client'
import {
    GET_ALL_POSTS,
    POSTS_COUNT,
    GET_ALL_POSTS_FILTERED_BY_CATEGORY_ID,
} from '../apollo/queries/index'

export const useAllPosts = (perPage = -1) => {
    const [page, setPage] = useState(0)

    const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
        variables: {
            page: page,
            perPage: perPage,
        },
    })
    const allPosts = data?.allPosts ?? []

    const { data: count } = useQuery(POSTS_COUNT)
    const numberOfPosts = count?._allPostsMeta?.count ?? 0

    const fetchMorePosts = () => {
        fetchMore({
            variables: {
                page: page + 1,
            },
        })
        setPage(page + 1)
    }

    return { loading, error, allPosts, numberOfPosts, fetchMorePosts }
}

export const useAllFilteredPosts = (id) => {
    const { loading, error, data, refetch } = useQuery(
        GET_ALL_POSTS_FILTERED_BY_CATEGORY_ID,
        { variables: { id: id }, notifyOnNetworkStatusChange: true }
    )
    const allFilteredPosts = data?.allPosts ?? []

    return {
        error,
        loading,
        allFilteredPosts,
        refetchFilteredPosts: refetch,
    }
}
