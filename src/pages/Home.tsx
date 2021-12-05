import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'

import { truncate } from '../utils/truncate'
import { useAllPosts } from '../hooks/useAllPosts'
import { useAllCategories } from '../hooks/useAllCategories'

import Loader from '../components/Loader'
import { POSTS_PER_PAGE_LIMIT } from '../utils/constants'

const Home = () => {
    const [page, setPage] = useState(0) as [page: number, setPage: Function]
    const { allCategories } = useAllCategories()
    const { loading, error, allPosts, numberOfPosts, fetchMore } = useAllPosts(
        page,
        POSTS_PER_PAGE_LIMIT
    )

    const onLoadMore = () => {
        fetchMore({
            variables: {
                page: page + 1,
            },
        })
        setPage(page + 1)
    }

    const getCategory = (id: string) => {
        const correspondingCategory = allCategories.find(
            (category: { id: string }) => category.id === id
        )
        return correspondingCategory.title
    }

    return (
        <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
            <Box sx={{ marginBottom: 3, borderBottom: '1px solid #313131' }}>
                <Typography variant="h4">Latest Posts</Typography>
            </Box>

            {loading && <Loader />}

            {error && <p>Oups, it's seems that an error occured.</p>}

            {allPosts.map((post: any) => (
                <Card sx={{ maxWidth: 345 }} key={post.id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={post.cover}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Chip label={getCategory(post.category_id)} />
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {truncate(post.content)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            component={Link}
                            to={`/post/${post.id}`}
                            size="small"
                        >
                            Read more
                        </Button>
                    </CardActions>
                </Card>
            ))}

            {allPosts.length < numberOfPosts && (
                <Button onClick={onLoadMore}>Load more articles</Button>
            )}
        </Container>
    )
}

export default Home
