import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './style.css';
import { MAIN_MENU_LIST } from '@/constants/application';

interface I_Props {
    children?: any;
}

export const MainLayout: React.FC<I_Props> = ({ children }) => {
    return (
        <>
            <Header menuList={MAIN_MENU_LIST.filter((menu) => menu.visible)} />
            <main id="content">{children}</main>
            <Footer />
        </>
    );
};

export default React.memo(MainLayout);
