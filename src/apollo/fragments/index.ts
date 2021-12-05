import { gql } from '@apollo/client'

export const POST_FRAGMENT = gql`
    fragment Post on Post {
        id
        category_id
        title
        content
        cover
    }
`

export const CATEGORY_FRAGMENT = gql`
    fragment Category on Category {
        id
        title
        description
    }
`
