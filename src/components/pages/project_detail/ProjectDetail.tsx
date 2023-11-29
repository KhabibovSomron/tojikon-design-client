import { FC } from 'react'
import './ProjectDetail.css'
import ImageSlider from '../../UI/image_slider/ImageSlider'
import { IImage } from '../../../redux/Types'
import { Link } from 'react-router-dom'

interface IProjectDetailProps {

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

const ProjectDetail: FC<IProjectDetailProps> = () => {
    return (
        <div className="project-detail">
            <ImageSlider slides={images} isLoading={false} />
            <div className="project_description">
                <div className="description_header">
                    <div className="project_type">ГОРОД</div>
                    <div className="project_title">НАЗВАНИЕ ПРОЕКТА №1</div>
                    <div className="project_date"><span>16</span>/<span>06</span>/<span>2035</span></div>
                    <Link to={'/portfolio/'} className='project_link'> Назад в портфолио</Link>
                </div>
                <div className="description_info">
                    Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.

                    Здесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;