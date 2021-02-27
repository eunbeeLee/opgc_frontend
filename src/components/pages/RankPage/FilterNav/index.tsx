import React from 'react';
import { NavLink } from 'react-router-dom';
import { RANK_MENUS } from '../constants';
import './style.css';

interface I_PROPS {}

const FilterNav: React.FC<I_PROPS> = () => {
    return (
        <div className="filter_nav">
            <ul className="filter_nav__list">
                {
                    RANK_MENUS.map(menu => (
                        <li key={menu.name} className="filter_nav__item">
                            <NavLink
                                to={menu.path}
                                className="filter_nav__link"
                                activeClassName="active"
                            >
                                {menu.display}
                            </NavLink>
                        </li>       
                    ))
                }
            </ul>
        </div>
    );
};

export default React.memo(FilterNav);

