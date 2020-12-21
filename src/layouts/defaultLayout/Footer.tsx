import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <p className="footer__desc">
                © 2020-now OPGC,<br/>
                Created by Jay, Chun<br/>
                BLAHBLAH
            </p>
            <ul className="footer__links">
                <li className="footer__links__item">
                    <a><i className="fab fa-github-square"></i></a>
                </li>
                <li className="footer__links__item">
                    <a><i className="far fa-envelope"></i></a>
                </li>
            </ul>
        </footer>
    );
};

export default React.memo(Footer);