import { FC, useEffect, useMemo, useRef, useState } from 'react'
import './ImageSlider.css'
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



    
    // const goToNext = () => {
    //     const isEndOfArray = currentIndex === slides.length - 1
    //     const newIndex = isEndOfArray ? 0: currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }

    // const goToPrev = () => {
    //     const isStartOfArray = currentIndex === 0
    //     const newIndex = isStartOfArray ? slides.length - 1: currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }

    const onDotClick =  (index: number) => {
        setCurrentIndex(index)

        const listNode = sliderTrack.current

        const imgNode = listNode.querySelectorAll('div')[index]
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
            
          });
    }

    let handle: string | number | NodeJS.Timeout | null | undefined = null

    const onScrollSlider = () => {
    
        if (handle) {
            clearTimeout(handle);
       }
       handle = setTimeout(() => {
            const scrollDistance = ref.current.scrollLeft

            const index = Math.floor(scrollDistance / (slideWidth + 8))
            
            setCurrentIndex(index)
       }, 66); 
    }

    return (
        <section className='project_slider'>
            <div className="carousel" ref={ref} onScroll={onScrollSlider}>
                    <div className="project_slides"
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

            {
                slides.length > 1 ?
                    <div className="control_container">
                    </div>
                : <></>
                
            }
        </section>
    )
}

export default ImageSlider;