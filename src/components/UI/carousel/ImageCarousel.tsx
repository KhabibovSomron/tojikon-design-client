import { FC, useEffect, useMemo, useRef, useState } from 'react'
import './ImageCarousel.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LazyImage from '../lazy-image/LazyImage'
import { IImage } from '../../../redux/Types'

interface ImageCarouselProps {
    slides: IImage[],
    isLoading: boolean
}



const ImageCarousel: FC<ImageCarouselProps> = ({slides, isLoading}) => {


    return (
        <section className='slider'>
            <div className="black-layer"></div>
            <div className="slides">
                {
                    isLoading ?
                        <Skeleton className='slide-skeleton' />
                    :
                    slides.map((slide, index) =>
                        <LazyImage src={slide.image} alt={`Product image #${index + 1}`} className='slide' skeletonClassName='slide-skeleton' key={index} />
                    )
                }
            </div>
        </section>
    )
}

export default ImageCarousel;