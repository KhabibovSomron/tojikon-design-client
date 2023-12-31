import { FC, useState } from 'react'
import './HamburgerButton.css'


interface IHamburgerButtonProps {
    isClicked: boolean,
    setIsClicked: Function
}

const HamburgerButton: FC<IHamburgerButtonProps> = ({isClicked, setIsClicked}) => {


    const updateMenu = () => {
        isClicked ? setIsClicked(false) : setIsClicked(true)
    }


    return (
        <div className="hamburger hamburger_container" onClick={updateMenu}>
            <div className={`hamburger_layouts ${isClicked ? 'clicked': 'unclicked'}`}></div>
            <div className={`hamburger_layouts ${isClicked ? 'clicked': 'unclicked'}`}></div>
            <div className={`hamburger_layouts ${isClicked ? 'clicked': 'unclicked'}`}></div>
        </div>
    )
}

export default HamburgerButton;