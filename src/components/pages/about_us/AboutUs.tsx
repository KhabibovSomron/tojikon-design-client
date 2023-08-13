import { FC } from 'react'
import './AboutUs.css'
import Employee from '../../UI/employee/Employee';


interface IAboutUsProps {

}

const AboutUs: FC<IAboutUsProps> = () => {
    return (
        <div className="about-us">
            <div className="about-us__container">
                <div className="about-us__company-information">
                    <span className='company-information__name'>АРХИТЕКТУРНАЯ КОМПАНИЯ TOJIKON DESIGN</span>
                    <div>
                        <span className="company-information__about-yourself">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores aliquam sapiente, eos, quia ipsa mollitia eum cupiditate quis ex voluptatibus officiis corrupti! Nesciunt sed accusantium voluptas nisi repudiandae obcaecati.</span>
                        <span className='company-information__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum dignissimos delectus error quos necessitatibus perspiciatis deserunt atque sit sed unde amet, omnis quaerat reprehenderit. Corrupti tempore qui aut a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae porro. Repellat eligendi mollitia, accusamus magni explicabo molestiae placeat, odit nulla autem esse sunt sapiente consequuntur optio molestias sint aut.</span>
                    </div>
                </div>
                <h1>АРХИТЕКТОРЫ</h1>
                <div className="about-us__employees-information">
                    <Employee about='Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. '
                    email='tojikon@gmail.com' image='https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg' name='Akane Kurokawa' specialization='ПАРТНЕР' />

<Employee about='Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. '
                    email='tojikon@gmail.com' image='https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg' name='Akane Kurokawa' specialization='ПАРТНЕР' />

<Employee about='Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. '
                    email='tojikon@gmail.com' image='https://c4.wallpaperflare.com/wallpaper/85/445/256/amagi-brilliant-park-anime-girls-sento-isuzu-sexy-anime-wallpaper-preview.jpg' name='Akane Kurokawa' specialization='ПАРТНЕР' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;