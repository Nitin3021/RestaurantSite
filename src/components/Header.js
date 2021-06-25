import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header__title">
        <header>
            <NavLink to="/" activeClassName="is-active" className="header-homepage__title">
                <div className="header-homepage__container">
                    <img className="logo-image" src='/images/logo.png' />
                    <h1 className="header_tilt">Talaga Restaurant</h1>
                </div>
            </NavLink>
            <div className="menu-layout-container">
                <NavLink to="/" activeClassName="is-active" className="menu-layout-item" exact={true} >Home</NavLink>
                <NavLink to="/menupage" activeClassName="is-active" className="menu-layout-item" exact={true} >Menu</NavLink>
                <NavLink to="/contact" activeClassName="is-active" className="menu-layout-item">Contact</NavLink>
            </div>
        </header>
    </div>
);

export default Header;