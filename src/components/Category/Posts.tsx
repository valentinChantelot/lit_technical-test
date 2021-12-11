import React from 'react'

import Grid from '@mui/material/Grid'

import Post from '../Post'
import Loader from '../Loader'

import { useAllFilteredPosts } from '../../hooks/useAllPosts'

export interface IProps {
    id: number | null
}

export const CategoryDraggableChip = ({ id }: IProps) => {
    const { loading, error, allPosts } = useAllFilteredPosts(id)

    return (
        <Grid container spacing={2}>
            {loading && <Loader />}
            {error && <p>Oups, it's seems that an error occured.</p>}

            {allPosts.map((post: any) => (
                <Grid item key={post.id}>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CategoryDraggableChip
