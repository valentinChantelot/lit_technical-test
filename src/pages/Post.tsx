import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Container from '@mui/material/Container'

import { GET_POST } from '../apollo/queries/index'
import { useCategory } from '../hooks/useCategory'

import Loader from '../components/Loader'
import './Post.scss'

const PostComponent = () => {
    const { id } = useParams() as {
        id: string
    }
    const { loading, error, data } = useQuery(GET_POST, {
        variables: {
            id: id,
        },
    }) as {
        loading: boolean
        error: any
        data: {
            Post: any
        }
    }

    const { category } = useCategory(data?.Post?.id)

    const style = {
        backgroundImage: `url('${data?.Post?.cover}')`,
    }

    return (
        <Container
            maxWidth="md"
            sx={{ paddingTop: 3, paddingBottom: 3 }}
            className="post-page"
        >
            <article>
                {loading && <Loader />}
                {error && <p>Oups, it's seems that an error occured.</p>}

                <div className="post-page__illustration" style={style}></div>
                <span className="post-page__category">{category?.title} </span>
                <h1>{data?.Post?.title}</h1>

                <p>{data?.Post?.content}</p>
            </article>
        </Container>
    )
}

export default PostComponent
