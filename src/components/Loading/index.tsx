import React from 'react';
import './style.css';

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <span className="loading__content">
                <div className="loading__content__icon">
                    <img src="/assets/imgs/logo-lion.png" />
                </div>
            </span>
            <div className="loading__overlay"></div>
        </div>
    );
};

export default Loading;
