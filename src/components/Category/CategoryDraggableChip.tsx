import React from 'react'

import Chip from '@mui/material/Chip'

import { useDrag } from 'react-dnd'

export interface ICategoryProps {
    category: any
}

export const CategoryDraggableChip = ({ category }: ICategoryProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'Category',
        item: { category },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const variant = isDragging ? 'outlined' : 'filled'

    return (
        <Chip
            label={category?.title}
            ref={drag}
            role="Category"
            variant={variant}
        />
    )
}

export default CategoryDraggableChip
