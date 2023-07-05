import { FC } from 'react'
import Header from './UI/header/Header'
import HamburgerButton from './UI/hamburger_button/HamburgerButton';

interface ILayoutProps {

}

const Layout: FC<ILayoutProps> = () => {
    return (
        <div className="main" >
            <Header />
            <HamburgerButton />
        </div>
    )
}

export default Layout;