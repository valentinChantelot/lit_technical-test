import { gql } from '@apollo/client'
import { POST_FRAGMENT, CATEGORY_FRAGMENT } from '../fragments/index'

export const GET_ALL_POSTS = gql`
    ${POST_FRAGMENT}
    query GetAllPosts($page: Int, $perPage: Int) {
        allPosts(page: $page, perPage: $perPage) {
            ...Post
        }
    }
`

export const GET_POST = gql`
    ${POST_FRAGMENT}
    query getAllPostsCount($id: ID!) {
        Post(id: $id) {
            ...Post
        }
    }
`

export const GET_ALL_CATEGORIES = gql`
    ${CATEGORY_FRAGMENT}
    query getAllCategories {
        allCategories {
            ...Category
        }
    }
`

export const GET_CATEGORY = gql`
    ${CATEGORY_FRAGMENT}
    query getCategory($id: ID!) {
        Category(id: $id) {
            ...Category
        }
    }
`

export const POSTS_COUNT = gql`
    query getAllPostsCount {
        _allPostsMeta {
            count
        }
    }
`
