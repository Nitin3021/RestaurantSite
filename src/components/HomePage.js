import React from 'react';

const HomePage = () => (
    <div className="box-layout">
        <h1 className="text-homepage-header">Welcome</h1>
        <p>Take a look around!</p>

        <div className="square">
            <img src="/images/Food_item_1.png" />
            <p className="menu-txt">Pancit is a Filipino dish that usually consists of noodles cooked with soy sauce </p>
        </div>

        <div className="square">
            <div className="square img_1-2">
            </div>
            <div className="square img_1-3">
            </div>

            <div className="square img_2-1">
            </div>
            <div className="square img_2-2">
            </div>
            <div className="square img_2-3">
            </div>

            <div className="square img_3-1">
            </div>
            <div className="square img_3-2">
            </div>
            <div className="square img_3-3">
            </div>
        </div>
    </div>
);

export default HomePage;