import React from 'react'
import { useDrag } from 'react-dnd'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { truncate } from '../../utils/truncate'

import './CategoryDraggable.scss'
import clsx from 'clsx'

export interface ICategoryProps {
    category: any
}

export const CategoryDraggable = ({ category }: ICategoryProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'Category',
        item: { category },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <div
            className={clsx(
                'draggable-category',
                isDragging && 'draggable-category--is-dragging'
            )}
            ref={drag}
        >
            <DragIndicatorIcon />
            <div className="draggable-category__content">
                <h5>{category?.title}</h5>
                <p>{truncate(category.description, 30)}</p>
            </div>
        </div>
    )
}

export default CategoryDraggable
