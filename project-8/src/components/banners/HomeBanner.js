import React from 'react';
import backgroundBanner from "../../assets/images/background-banner.png";

export const Banner = () => {
    return (
        <div className="banner-container">
            <img src={backgroundBanner} alt="Chez vous et partout ailleurs" className="banner-image" />
            <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
    );
};
