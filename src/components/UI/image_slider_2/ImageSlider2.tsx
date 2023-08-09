import { FC, useEffect, useMemo, useRef, useState } from 'react'
import './ImageSlider2.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LazyImage from '../lazy-image/LazyImage'
import { IImage } from '../../../redux/Types'

interface ImageSliderProps {
    slides: IImage[],
    isLoading: boolean
}



const ImageSlider: FC<ImageSliderProps> = ({slides, isLoading}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const ref: any = useRef(null)
    const sliderTrack: any = useRef(null)

    const slideWidth = useMemo(() => {
        if (ref.current) {
           return ref.current.offsetWidth
        }
        return 0
    }, [ref, slides])


    useEffect(() => {
        setCurrentIndex(0)
    }, [ref, slides])



    return (
        <section className='slider'>
            <div className="carousel" ref={ref}>
                    <div className="slides"
                    ref={sliderTrack}
                    >
                        {
                        
                            isLoading ?
                                
                                <Skeleton className='slide-skeleton' />
                            
                            :
                            slides.map((slide, index) =>
                                <LazyImage src={slide.image} alt={`Product image #${index + 1}`} className='slide' skeletonClassName='slide-skeleton' key={index} />
                            )
                        }
                    </div>
            </div>
            <div className="black-layer"></div>
        </section>
    )
}

export default ImageSlider;