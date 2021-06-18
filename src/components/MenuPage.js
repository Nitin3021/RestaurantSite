import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
    '/images/Food_item_1.jpg',
    '/images/Food_item_2.jpg',
    '/images/Food_item_3.jpg',
    '/images/Food_item_4.jpg',
    '/images/Food_item_5.jpg',
    '/images/Food_item_6.jpg',
    '/images/Food_item_7.jpg',
    '/images/Food_item_8.jpg',
    '/images/Food_item_9.jpg'
];

const MenuPage = () => {
    return (
        <div className="box-layout">
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[0]} />
                        </div>
                        <h2>Pancit</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[1]} />
                        </div>
                        <h2>Sinigang</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[2]} />
                        </div>
                        <h2>Adobo</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[3]} />
                        </div>
                        <h2>Special Chicken!</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[4]} />
                        </div>
                        <h2>Halo Halo!</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[5]} />
                        </div>
                        <h2>Spageee</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[6]} />
                        </div>
                        <h2>Pizza</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[7]} />
                        </div>
                        <h2>Lasagna</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[8]} />
                        </div>
                        <h2>Kare Kare</h2>
                    </div>
                </Fade>
            </div>
        </div>
    )
};

export default MenuPage;