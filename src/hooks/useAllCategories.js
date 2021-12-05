import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../apollo/queries/index'

export const useAllCategories = () => {
    const { loading, error, data } = useQuery(GET_ALL_CATEGORIES)
    const allCategories = data?.allCategories ?? []

    return { loading, error, allCategories }
}
