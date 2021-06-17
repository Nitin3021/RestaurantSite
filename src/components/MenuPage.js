import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
    '/images/Food_item_1.jpg',
    '/images/Food_item_2.jpg',
    '/images/Food_item_3.jpg'
];

const MenuPage = () => {
    return (
        <div className="box-layout">
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <div className="image-container slide-style">
                            <img src={fadeImages[0]} />
                        </div>
                        <h2>First Slide</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container slide-style">
                            <img src={fadeImages[1]} />
                        </div>
                        <h2>Second Slide</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container slide-style">
                            <img src={fadeImages[2]} />
                        </div>
                        <h2>Third Slide</h2>
                    </div>
                </Fade>
            </div>
        </div>
    )
};

export default MenuPage;