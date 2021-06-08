import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header__title">
        <h1>Blue Lagoon Restaurant</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
        <NavLink to="/menupage" activeClassName="is-active" exact={true} >Menu</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
);

export default Header;