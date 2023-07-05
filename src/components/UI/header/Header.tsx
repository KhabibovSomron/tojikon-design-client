import { FC } from "react";
import "./Header.css";

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <div className="logo_icon">TD</div>
                    <div className="logo_text">TOJIKON DESIGN</div>
                </div>

                <div className="links">
                    <a className="link" href="/">ГЛАВНАЯ</a>
                    <a className="link" href="/">ПОРТФОЛИО</a>
                    <a className="link" href="/">О НАС</a>
                </div>
            </div>
        </header>
    )
}

export default Header