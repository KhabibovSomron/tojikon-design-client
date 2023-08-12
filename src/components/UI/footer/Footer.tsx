import { FC } from 'react'
import './Footer.css'

interface IFooterProps {

}

const Footer: FC<IFooterProps> = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <h3>СВЯЗАТЬСЯ:</h3>
                <div className="footer__contact">

                    <div className="contact__phone">
                        <span>Тел. +992 900 99-99-99</span>
                        <span>Email: info@mysite.tj</span>
                    </div>
                    <div className="contact__address">
                        <span>Ул. Исмоили Сомони, 1в</span>
                        <span>Душанбе, Таджикистан</span>
                    </div>
                </div>
                <div className="footer__copyright">
                    <span>© 2023 Архитектурная компания «Tojikon Design».</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;