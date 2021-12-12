import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import CategoryDraggableChip from '../components/Category/CategoryDraggableChip'
import Posts from '../components/Category/Posts'

import { useAllCategories } from '../hooks/useAllCategories'

const Category = () => {
    const [filterId, setFilterId] = useState(null)
    const { allCategories } = useAllCategories()

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'Category',
        drop: (item: any) => {
            setFilterId(item.category.id)
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
                                {filterId && <Posts id={filterId} />}
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
