import React from 'react'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { truncate } from '../utils/truncate'
import { useAllCategories } from '../hooks/useAllCategories'
import './Post.scss'

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
        <Grid item>
            <article className="post">
                <div
                    className="post__illustration"
                    style={{ backgroundImage: `url(${post.cover})` }}
                ></div>
                <div className="post__content">
                    <span className="post__content__category">
                        {getCategory(post.category_id)}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{truncate(post.content)}</p>
                    <Link to={`/post/${post.id}`} className="readMore">
                        Read more <ArrowForwardIcon />
                    </Link>
                </div>
            </article>
        </Grid>
    )
}

export default Post
