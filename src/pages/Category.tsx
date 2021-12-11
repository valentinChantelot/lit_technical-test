import React, { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import CategoryDraggableChip from '../components/Category/CategoryDraggableChip'
import Loader from '../components/Loader'
import Post from '../components/Post'

import { useAllCategories } from '../hooks/useAllCategories'
import { useAllPosts } from '../hooks/useAllPosts'

const Category = () => {
    const [filter, setFilter] = useState(null)
    const { allCategories } = useAllCategories()
    const { loading, error, allPosts } = useAllPosts()

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'Category',
        drop: (item: any) => {
            console.info(item)
            const { category } = item
            setFilter(category.id)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver

    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <Container maxWidth="lg" sx={{ paddingTop: 3, paddingBottom: 3 }}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={8}
                        sx={{ paddingTop: 3, paddingBottom: 3 }}
                        ref={drop}
                        style={{ backgroundColor }}
                    >
                        <Box
                            sx={{
                                marginBottom: 3,
                                borderBottom: '1px solid #313131',
                            }}
                        >
                            <Typography variant="h4">
                                Category's post
                            </Typography>

                            <Grid container spacing={2}>
                                {loading && <Loader />}
                                {error && (
                                    <p>
                                        Oups, it's seems that an error occured.
                                    </p>
                                )}

                                {allPosts.map((post: any) => (
                                    <Grid item key={post.id}>
                                        <Post post={post} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction="column" spacing={2}>
                            <p>ALL</p>
                            {allCategories.map((category: any) => (
                                <CategoryDraggableChip
                                    category={category}
                                    key={category.id}
                                />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </DndProvider>
    )
}

export default Category
