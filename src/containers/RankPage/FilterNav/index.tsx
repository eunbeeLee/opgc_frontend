import { RANK_MENU_LIST } from '@/constants/menu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

interface I_PROPS {}

const FilterNav: React.FC<I_PROPS> = () => {
    return (
        <div className="filter-nav">
            <ul className="filter-nav__list">
                {RANK_MENU_LIST.map((menu) => {
                    return (
                        menu.visible && (
                            <li key={menu.name} className="filter-nav__item">
                                <NavLink
                                    to={menu.path}
                                    className="filter-nav__link"
                                    activeClassName="active"
                                >
                                    {menu.label}
                                </NavLink>
                            </li>
                        )
                    );
                })}
            </ul>
        </div>
    );
};

export default React.memo(FilterNav);
