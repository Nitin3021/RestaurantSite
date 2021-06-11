import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header__title">
        <header>
            <h1>Talaga Restaurant</h1>
            <div className="menu-layout-container">
                <NavLink to="/" activeClassName="is-active" className="menu-layout-item" exact={true} >Home</NavLink>
                <NavLink to="/menupage" activeClassName="is-active" className="menu-layout-item" exact={true} >Menu</NavLink>
                <NavLink to="/contact" activeClassName="is-active" className="menu-layout-item">Contact</NavLink>
            </div>
        </header>
    </div>
);

export default Header;