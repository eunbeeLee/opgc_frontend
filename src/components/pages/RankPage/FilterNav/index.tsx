import React from 'react';
import './style.css';

interface I_PROPS {
    onChange?: (e: any) => void
}

const FilterNav: React.FC<I_PROPS> = () => {
    return (
        <div className="filter_nav">
            <ul className="filter_nav__list">
                <li className="filter_nav__item active">기여도</li>
                <li className="filter_nav__item">팔로워</li>
                <li className="filter_nav__item">팔로잉</li>
                <li className="filter_nav__item">언어</li>
            </ul>
        </div>
    );
};

export default React.memo(FilterNav);

