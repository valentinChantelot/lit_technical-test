import React, { useEffect } from 'react'

import Grid from '@mui/material/Grid'

import Post from '../Post'
import Loader from '../Loader'

import { useAllFilteredPosts } from '../../hooks/useAllPosts'

export interface IProps {
    id: number | null
}

export const CategoryDraggableChip = ({ id }: IProps) => {
    const { loading, error, allFilteredPosts, refetchFilteredPosts } =
        useAllFilteredPosts(id)

    useEffect(() => {
        refetchFilteredPosts()
    }, [id])

    return (
        <>
            {loading && <Loader />}
            {error && <p>Oups, it's seems that an error occured.</p>}

            {!loading &&
                allFilteredPosts.map((post: any) => (
                    <Grid item key={post.id}>
                        <Post post={post} />
                    </Grid>
                ))}
        </>
    )
}

export default CategoryDraggableChip
