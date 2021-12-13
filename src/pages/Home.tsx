import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import { useAllPosts } from '../hooks/useAllPosts'

import Loader from '../components/Loader'
import Post from '../components/Post'
import { POSTS_PER_PAGE_LIMIT } from '../utils/constants'

import './Home.scss'

const Home = () => {
    const { loading, error, allPosts, numberOfPosts, fetchMorePosts } =
        useAllPosts(POSTS_PER_PAGE_LIMIT)

    const onLoadMore = () => {
        fetchMorePosts()
    }

    return (
        <Container
            maxWidth="md"
            sx={{ paddingTop: 3, paddingBottom: 3 }}
            className="home-page"
        >
            <h1>Lastest posts</h1>

            {error && <p>Oups, it's seems that an error occured.</p>}

            <Grid container spacing={2}>
                {allPosts.map((post: any) => (
                    <Grid item key={post.id}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>

            {loading && <Loader />}
            {allPosts.length < numberOfPosts && (
                <button type="button" onClick={onLoadMore}>
                    Load more articles
                </button>
            )}
        </Container>
    )
}

export default Home
