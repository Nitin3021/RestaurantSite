import React from 'react';
import { Fade } from 'react-slideshow-image';

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

const HomePage = () => {
    return (
        <div className="box-layout">

            <div className="text-homepage-header">
                <div className="header-welcome-container" >
                    <img className="image-homepage-header" src="/images/fork.png" />
                    <h1>Welcome</h1>
                    <img className="image-homepage-header" src="/images/spoon.png" />
                </div>
                <p>Take a look around!</p>
            </div>

            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <h2 className="slide-text">Pancit</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[0]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Sinigang</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[1]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Adobo</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[2]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Special Chicken!</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[3]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Halo Halo!</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[4]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Yummy Spag</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[5]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Pizza Bianca</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[6]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Lasagna</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[7]} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <h2 className="slide-text">Buffet!</h2>
                        <div className="image-container">
                            <img className="slide-style" src={fadeImages[8]} />
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
};

export default HomePage;