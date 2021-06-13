import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';

const Header = ({ menuList }) => {
    const dispatch = useDispatch();
    const { setMobileNav: setNav } = actions.ui.app;
    const { nav } = useSelector((state: T_ROOT_REDUCER) => state.ui.app);
    const handleMenuToggleBtn = () => {
        dispatch(setNav(!nav));
    };

    return (
        <header id="header">
            <div className="header__wrap">
                <div className="header__column">
                    <Link className="header__link" to="/">
                        <h1 className="header__title">
                            <img src="/assets/imgs/logo-white.png" />
                            <span>OPGC</span>
                        </h1>
                    </Link>
                    <a
                        className="header__menu-btn"
                        onClick={handleMenuToggleBtn}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </div>

                <nav
                    className="header__column header__navbar navbar"
                    style={{ display: nav ? 'unset' : '' }}
                >
                    <ul className="navbar__menu">
                        {menuList.map((menu) => (
                            <li key={menu.name}>
                                <NavLink
                                    onClick={handleMenuToggleBtn}
                                    to={menu.path}
                                    className="navbar__item"
                                    activeClassName="active"
                                >
                                    {menu.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default React.memo(Header);
