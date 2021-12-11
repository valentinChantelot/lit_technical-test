import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useAllPosts } from '../hooks/useAllPosts'

import Loader from '../components/Loader'
import Post from '../components/Post'
import { POSTS_PER_PAGE_LIMIT } from '../utils/constants'

const Home = () => {
    const { loading, error, allPosts, numberOfPosts, fetchMorePosts } =
        useAllPosts(POSTS_PER_PAGE_LIMIT)

    const onLoadMore = () => {
        fetchMorePosts()
    }

    return (
        <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
            <Box sx={{ marginBottom: 3, borderBottom: '1px solid #313131' }}>
                <Typography variant="h4">Latest Posts</Typography>
            </Box>

            {loading && <Loader />}

            {error && <p>Oups, it's seems that an error occured.</p>}

            <Grid container spacing={2}>
                {allPosts.map((post: any) => (
                    <Grid item key={post.id}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>

            {allPosts.length < numberOfPosts && (
                <Button onClick={onLoadMore}>Load more articles</Button>
            )}
        </Container>
    )
}

export default Home
