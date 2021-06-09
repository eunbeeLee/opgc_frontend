import React from 'react';

const Footer = () => {
    const nowYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <p className="footer__desc">
                Copyright© 2020-{nowYear} Dirty Boyz
                <img src="/assets/imgs/logo.png" />
            </p>
            <div className="footer__spliter pc-only"></div>
            <ul className="footer__links">
                <li className="footer__links__item">
                    <a
                        href="https://www.notion.so/dirtyboyz/About-1646eb48c3264fbd915bbe2779f49845"
                        target="_blank"
                    >
                        About
                    </a>
                </li>
                <li className="footer__links__item">
                    <a
                        href="https://www.notion.so/dirtyboyz/Contact-e17a6504178146e7b2e863ecd6463414"
                        target="_blank"
                    >
                        Contact
                    </a>
                </li>
                <li className="footer__links__item">
                    <a
                        href="https://www.notion.so/dirtyboyz/Private-Policy-2af612a45efe45198fdbd74c67de0160"
                        target="_blank"
                    >
                        Private Policy
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default React.memo(Footer);
