import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import CategoryDraggableChip from '../components/Category/CategoryDraggable'
import Post from '../components/Post'
import Loader from '../components/Loader'

import { useAllFilteredPosts } from '../hooks/useAllPosts'
import { useAllCategories } from '../hooks/useAllCategories'
import './Category.scss'

const Category = () => {
    const [filterId, setFilterId] = useState(null)
    const { allCategories } = useAllCategories()

    const { loading, error, allFilteredPosts, refetchFilteredPosts } =
        useAllFilteredPosts(filterId)

    useEffect(() => {
        refetchFilteredPosts()
    }, [filterId])

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

    const handleReset = () => {
        setFilterId(null)
    }

    const isActive = canDrop && isOver

    return (
        <DndProvider backend={HTML5Backend}>
            <Container
                maxWidth="lg"
                sx={{ paddingTop: 3, paddingBottom: 3 }}
                className="category-page"
            >
                <h1>Filtered posts</h1>
                <div className="category-page__wrapper">
                    <section
                        className={clsx(
                            'posts-list',
                            !filterId && 'posts-list--is-empty',
                            isActive && 'posts-list--active',
                            canDrop && 'posts-list--can-drop'
                        )}
                        ref={drop}
                    >
                        <Grid container spacing={2}>
                            {!filterId && (
                                <Grid item>
                                    <p>
                                        Drag a category in order to display
                                        corresponding posts
                                    </p>
                                </Grid>
                            )}

                            {filterId && loading && <Loader />}
                            {filterId && error && (
                                <p>Oups, it's seems that an error occured.</p>
                            )}
                            {filterId &&
                                !loading &&
                                allFilteredPosts.map((post: any) => (
                                    <Grid item key={post.id}>
                                        <Post post={post} />
                                    </Grid>
                                ))}
                        </Grid>
                    </section>

                    <section className="categories-list">
                        {allCategories.map((category: any) => (
                            <CategoryDraggableChip
                                category={category}
                                key={category.id}
                            />
                        ))}

                        <button type="button" onClick={handleReset}>
                            Reset filter
                        </button>
                    </section>
                </div>
            </Container>
        </DndProvider>
    )
}

export default Category
