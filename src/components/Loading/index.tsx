import React from 'react';
import Overlay from '../Overlay';
import './style.css';

const Loading: React.FC = () => {
    return (
        <Overlay>
            <div className="loading">
                <span className="loading__content">
                    <div className="loading__content__icon">
                        <img src="/assets/imgs/logo-lion.png" />
                    </div>
                </span>
            </div>
        </Overlay>
    );
};

export default Loading;
