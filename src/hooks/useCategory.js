import { useQuery } from '@apollo/client'
import { GET_CATEGORY } from '../apollo/queries/index'

export const useCategory = (id) => {
    const { loading, error, data } = useQuery(GET_CATEGORY, {
        variables: {
            id: id,
        },
    })
    const category = data?.Category ?? {}

    return { loading, error, category }
}
