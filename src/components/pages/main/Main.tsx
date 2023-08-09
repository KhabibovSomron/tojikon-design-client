import { FC } from 'react'
import ImageSlider from '../../UI/image_slider_2/ImageSlider2';
import { IImage } from '../../../redux/Types';
import './Main.css'
import LazyImage from '../../UI/lazy-image/LazyImage';

interface IMainProps {

}

let images: IImage[] = [
    {
        id: 1,
        image: 'https://c4.wallpaperflare.com/wallpaper/744/297/109/anime-girls-pixiv-fantasia-wings-thigh-highs-dress-elbow-gloves-angel-sexy-anime-wallpaper-preview.jpg'
    },
    {
        id: 2,
        image: 'https://c4.wallpaperflare.com/wallpaper/599/446/502/anime-anime-girls-blonde-braids-wallpaper-preview.jpg'
    },
    {
        id: 3,
        image: 'https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg'
    },
    {
        id: 4,
        image: 'https://w0.peakpx.com/wallpaper/805/457/HD-wallpaper-animals-hot-anime-girl-sexy-anime-girl-anime-girl-anime.jpg'
    }
]

const Main: FC<IMainProps> = () => {
    return (
        <div className="main">
            <ImageSlider isLoading={false} slides={images}/>
            <div className="main__container">
                <h1>ИЗБРАННЫЕ ПРОЕКТЫ</h1>
                <div className="selected-projects">
                    <div className="selected-projects__item">
                        
                        <LazyImage src={images[0].image} skeletonClassName='selected-projects__image-skeleton' className='selected-projects__image' alt={`Project image #${images[0].id}`}/>
                        
                        <div className="selected-projects__info">
                            <span className="info__date">02/35</span>
                            <h2 className="info__title">ПРОЕКТ 2, ПЕТЕРБУРГ</h2>
                            <span className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur, placeat culpa recusandae odio facilis illum autem nesciunt laborum, sequi nulla commodi, omnis dolore excepturi labore earum reprehenderit numquam similique.</span>
                            <a href="#" className="info__link">Смотреть</a>
                        </div>
                    </div>

                    <div className="selected-projects__item">
                        
                        <LazyImage src={images[0].image} skeletonClassName='selected-projects__image-skeleton' className='selected-projects__image' alt={`Project image #${images[0].id}`}/>
                        
                        <div className="selected-projects__info">
                            <span className="info__date">02/35</span>
                            <h2 className="info__title">ПРОЕКТ 2, ПЕТЕРБУРГ</h2>
                            <span className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur, placeat culpa recusandae odio facilis illum autem nesciunt laborum, sequi nulla commodi, omnis dolore excepturi labore earum reprehenderit numquam similique.</span>
                            <a href="#" className="info__link">Смотреть</a>
                        </div>
                    </div>

                    <div className="selected-projects__item">
                        
                        <LazyImage src={images[0].image} skeletonClassName='selected-projects__image-skeleton' className='selected-projects__image' alt={`Project image #${images[0].id}`}/>
                        
                        <div className="selected-projects__info">
                            <span className="info__date">02/35</span>
                            <h2 className="info__title">ПРОЕКТ 2, ПЕТЕРБУРГ</h2>
                            <span className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <a href="#" className="info__link">Смотреть</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;