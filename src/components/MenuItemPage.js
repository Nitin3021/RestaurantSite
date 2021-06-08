import React from 'react';

const MenuItemPage = (props) => {
    return (
        <div>
            <h1>Your Menu Items</h1>
            {props.match.params.id && <p>ID for your Item is: {props.match.params.id}</p>}
        </div>
    );
};

export default MenuItemPage;