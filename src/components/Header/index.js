import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../routing/pages'
import logo from './../../assets/images/logo.svg'
import star from './../../assets/images/star.svg'
import menu from './../../assets/images/menu.svg'

import './header.scss'
const Header = () => {
    const togglemMenu = () =>{
        var menu = document.getElementById("menu");
        if (document.getElementsByClassName("header__menu--hide").length === 0) {
            menu.className = "header__menu header__menu--hide";
        } else {
            menu.className = "header__menu header__menu--show";
        }
    }
    return (
        <header>
            <div className="header container">
                <img className="header__logo" src={logo} alt="logo PETrin" title="logo PETrin"></img>
                <nav className="header__menu header__menu--hide" id="menu">
                {Pages.map((item, i) => (
                    <NavLink
                        key={i}
                        to={item.path}
                        activeClassName="active"
                        className="header__link"
                        >
                        <span className="header__icons" href="#">
                            <img src={item.icon} className="header__icons-icon" />
                            <img src={star} className="header__icons-star" />
                        </span>
                        {item?.name}
                    </NavLink>
                ))}
                </nav>
                <button className="header__mobile-button" onClick={() => togglemMenu()}>
                    <img src={menu} className="header__icons-star header__icons-star--button" />
                </button>
            </div>
            </header>
    )
}

export default Header
