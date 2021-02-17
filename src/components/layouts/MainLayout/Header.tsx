import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ menuList }) => {
    return (
        <header id="header">
            <Link to="/">
                <h1 className="header__title">
                    <img src="/assets/imgs/logo-white.png" />
                    <span>OPGC</span>
                </h1>
            </Link>

            <nav className="header__navbar navbar">
                <ul className="navbar__menu">
                    {menuList.map((menu) => (
                        <li key={menu.name}>
                            <NavLink
                                to={menu.path}
                                className="navbar__item"
                                activeClassName="active"
                            >
                                {menu.display}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default React.memo(Header);
