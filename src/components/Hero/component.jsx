import React from 'react';
import './style.css';

const createMarkup = (html) => ({ __html: html });

const Hero = ({ hero }) => (
    <div className="hero-wrapper">
        <h1 className="hero-title" dangerouslySetInnerHTML={createMarkup(hero.title)} />
        <div className='hero-image-container'>
            <h2 className="hero-author" dangerouslySetInnerHTML={createMarkup(hero.author + " | " + hero.date)} />
            <img src={hero.image} alt="Hero" className="hero-image" />
        </div>
    </div>
);

export default Hero;