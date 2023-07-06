import { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
                    <Link to='/' className="link">ГЛАВНАЯ</Link>
                    <Link to='/portfolio/' className="link">ПОРТФОЛИО</Link>
                    <Link to='/about-us/' className="link">О НАС</Link>
                </div>
            </div>
        </header>
    )
}

export default Header