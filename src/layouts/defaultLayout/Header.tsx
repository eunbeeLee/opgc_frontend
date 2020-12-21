import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ menuList }) => {
    const [ menu, setMenu ] = useState(menuList[0]);

    return (
        <header id="header">
            <Link to="/">
                <h1 className="header__title">
                    <img src="/imgs/logo-white.png"/>
                    <span>OPGC</span>
                </h1>
            </Link>
            
            <nav className="header__navbar navbar">
                <ul className="navbar__menu">
                    {
                        menuList.map((m) => 
                            <li 
                                key={m.name} 
                                className={`navbar__item ${(menu.name === m.name) ? 'active' : ''}`}
                            >
                                <Link to={m.path} onClick={() => { setMenu(m)} }>
                                    {m.display}</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
};

export default React.memo(Header);