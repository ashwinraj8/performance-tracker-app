import React from 'react';
import './Banner.scss'

const Banner = ({ text }) => {
    return (
        <div className="banner">
            {text}
        </div>
    );
};

export default Banner;