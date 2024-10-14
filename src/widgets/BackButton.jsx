// src/widgets/BackButton.jsx
import React from 'react';
import './BackButton.scss'; // Create a corresponding SCSS file for styles if needed

const BackButton = ({ onClick, buttonText }) => {
    return (
        <button className='back-button' onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default BackButton;
