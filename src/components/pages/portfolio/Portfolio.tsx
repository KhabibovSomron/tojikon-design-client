import { FC } from 'react'
import './Portfolio.css'
import { IImage } from '../../../redux/Types'
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
                    <ProjectItem image={images[0].image} index={1} id={images[0].id} />
                    <ProjectItem image={images[1].image} index={2} id={images[1].id}/>
                    <ProjectItem image={images[2].image} index={3} id={images[2].id}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;