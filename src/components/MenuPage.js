import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuPage = () => {
    return (
        <div>
            <h1>Check your Menu here le!</h1>
            <NavLink to="/menupage/1" activeClassName="is-active">ItemOne</NavLink>
            <NavLink to="/menupage/2" activeClassName="is-active">ItemTwo</NavLink>
        </div>
    );
};

export default MenuPage;