import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


interface INavigationProps {
    isClicked: boolean,
    setIsClicked: Function
}

const Navigation: FC<INavigationProps> = ({isClicked, setIsClicked}) => {

    
    const onLinkClicked = () => {
        setIsClicked(false)   
    }

    return (
        <nav className={`navigation ${isClicked ? 'clicked' : 'unclicked'}`}>
            <div className="navigation_item">
                <Link className="navigation_link" to='/' onClick={onLinkClicked}>ГЛАВНАЯ</Link>
            </div>
            <div className="navigation_item">
                <Link className="navigation_link" to='/portfolio/' onClick={onLinkClicked}>ПОРТФОЛИО</Link>
            </div>
            <div className="navigation_item">
                <Link className="navigation_link" to='/about-us/' onClick={onLinkClicked}>О НАС</Link>
            </div>
        </nav>
    )
}

export default Navigation;