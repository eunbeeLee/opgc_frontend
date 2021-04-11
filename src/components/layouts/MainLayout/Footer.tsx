import React from 'react';

const Footer = () => {
    const nowYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <p className="footer__desc">
                Copyright© 2020-{nowYear} OPGC
                <br />
                Over Programmed Good Coding
            </p>
            <ul className="footer__links">
                <li className="footer__links__item">
                    <a>
                        <i className="fab fa-github-square"></i>
                    </a>
                </li>
                <li className="footer__links__item">
                    <a>
                        <i className="far fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default React.memo(Footer);
