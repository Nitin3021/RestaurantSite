import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header__title">
        <header>
            <NavLink to="/" activeClassName="is-active" className="header-homepage__title">
                <div className="header-homepage__container">
                    <h1 className="header_tilt_left">Talaga</h1>
                    <img className="logo-image" src='/images/logo.png' />
                    <h1 className="header_tilt_right">Resto</h1>
                </div>
            </NavLink>
            <div className="menu-layout-container">
                <NavLink to="/" activeClassName="is-active" className="menu-layout-item" exact >Home</NavLink>
                <NavLink to="/menupage" activeClassName="is-active" className="menu-layout-item" exact >Menu</NavLink>
                <NavLink to="/contact" activeClassName="is-active" className="menu-layout-item">Contact</NavLink>
            </div>
        </header>
    </div>
);

export default Header;