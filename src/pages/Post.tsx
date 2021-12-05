import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { GET_POST } from '../apollo/queries/index'

import Loader from '../components/Loader'

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

    const style = {
        backgroundImage: `url('${data?.Post?.cover}')`,
    }

    return (
        <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
            {loading && <Loader />}
            {error && <p>Oups, it's seems that an error occured.</p>}

            <div className="illustration" style={style}></div>
            <Typography gutterBottom variant="h1" component="h1">
                {data?.Post?.title}
            </Typography>

            <Typography
                variant="body1"
                component="article"
                color="text.secondary"
            >
                {data?.Post?.content}
            </Typography>
        </Container>
    )
}

export default PostComponent
