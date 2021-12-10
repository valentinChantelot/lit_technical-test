import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import { truncate } from '../utils/truncate'
import { useAllCategories } from '../hooks/useAllCategories'

export interface Props {
    post: {
        id: string
        cover: string
        category_id: string
        title: string
        content: string
    }
}

const Post = ({ post }: Props) => {
    const { allCategories } = useAllCategories()

    const getCategory = (id: string) => {
        const correspondingCategory = allCategories.find(
            (category: { id: string }) => category.id === id
        )
        return correspondingCategory?.title
    }

    return (
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
                <Button component={Link} to={`/post/${post.id}`} size="small">
                    Read more
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
