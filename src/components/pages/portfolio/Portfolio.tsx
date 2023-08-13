import { FC, useState } from 'react'
import './Portfolio.css'
import { IImage } from '../../../redux/Types'
import LazyImage from '../../UI/lazy-image/LazyImage'
import ProjectItem from '../../UI/project-item/ProjectItem'

interface IPortfolioProps {

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

const Portfolio: FC<IPortfolioProps> = () => {

    return (
        <div className="portfolio">
            <div className="portfolio__container">
                <h1>ПРОЕКТЫ</h1>
                <div className="portfolio__projects">
                    <ProjectItem image={images[0].image} index={1} />
                    <ProjectItem image={images[0].image} index={2} />
                    <ProjectItem image={images[0].image} index={3} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;