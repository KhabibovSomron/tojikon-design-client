import { FC } from 'react'
import { IImage } from '../../../redux/Types';
import './Main.css'
import LazyImage from '../../UI/lazy-image/LazyImage';
import ImageCarousel from '../../UI/carousel/ImageCarousel';
import { Link } from 'react-router-dom';

interface IMainProps {

}

let images: IImage[] = [
    {
        id: 1,
        image: 'https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg'
    },
    {
        id: 2,
        image: 'https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg'
    },
    {
        id: 3,
        image: 'https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg'
    },
    {
        id: 4,
        image: 'https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg'
    },
]

const Main: FC<IMainProps> = () => {
    return (
        <div className="main">
            <ImageCarousel isLoading={false} slides={images}/>
            <div className="main__container">
                <h1>ИЗБРАННЫЕ ПРОЕКТЫ</h1>
                <div className="selected-projects">
              
                    <div className="selected-projects__item">
                        
                        <LazyImage src={images[0].image} skeletonClassName='selected-projects__image-skeleton' className='selected-projects__image' alt={`Project image #${images[0].id}`}/>
                        
                        <div className="selected-projects__info">
                            <span className="info__date">02/35</span>
                            <h2 className="info__title">ПРОЕКТ 2, ПЕТЕРБУРГ</h2>
                            <span className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur, placeat culpa recusandae odio facilis illum autem nesciunt laborum, sequi nulla commodi, omnis dolore excepturi labore earum reprehenderit numquam similique.</span>
                            <Link to={`/project/1/`} className="info__link">Смотреть</Link>
                        </div>
                    </div>
            
                    <div className="selected-projects__item">
                        
                        <LazyImage src={images[0].image} skeletonClassName='selected-projects__image-skeleton' className='selected-projects__image' alt={`Project image #${images[0].id}`}/>
                        
                        <div className="selected-projects__info">
                            <span className="info__date">02/35</span>
                            <h2 className="info__title">ПРОЕКТ 2, ПЕТЕРБУРГ</h2>
                            <span className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur, placeat culpa recusandae odio facilis illum autem nesciunt laborum, sequi nulla commodi, omnis dolore excepturi labore earum reprehenderit numquam similique.</span>
                            <Link to={`/project/2/`} className="info__link">Смотреть</Link>
                        </div>
                    </div>
          
                    <div className="selected-projects__item">
                        
                        <LazyImage src={images[0].image} skeletonClassName='selected-projects__image-skeleton' className='selected-projects__image' alt={`Project image #${images[0].id}`}/>
                        
                        <div className="selected-projects__info">
                            <span className="info__date">02/35</span>
                            <h2 className="info__title">ПРОЕКТ 2, ПЕТЕРБУРГ</h2>
                            <span className="info__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <Link to={`/project/3/`} className="info__link">Смотреть</Link>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Main;