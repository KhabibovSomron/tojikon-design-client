import { FC, Suspense, useState } from 'react'
import { Outlet } from "react-router-dom"
import Header from './UI/header/Header'
import HamburgerButton from './UI/hamburger_button/HamburgerButton';
import Navigation from './UI/navigation/Navigation'
import { SkeletonTheme } from 'react-loading-skeleton';
interface ILayoutProps {

}

const Layout: FC<ILayoutProps> = () => {

    const [navigationActive, setNavigationActive] = useState<boolean>(false)

    return (
        <div className="main" >
            <Header />
            <HamburgerButton isClicked={navigationActive} setIsClicked={setNavigationActive} />
            <Navigation isClicked={navigationActive} setIsClicked={setNavigationActive} />
            <Suspense>
                <SkeletonTheme baseColor='gray'>
                    <Outlet />
                </SkeletonTheme>
            </Suspense>
        </div>
    )
}

export default Layout;