import { useDispatch } from 'react-redux';
import { actions } from '@/modules';
import { MAIN_MENU_LIST } from '@/constants/menu';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './style.css';

interface I_Props {
    children?: any;
}

export const MainLayout: React.FC<I_Props> = ({ children }) => {
    const dispatch = useDispatch();
    const { setRecommand } = actions.ui.mainPage;

    const handleClickLayout = (e) => {
        dispatch(setRecommand(false));
    };

    return (
        <div className="root" onClick={handleClickLayout}>
            <Header menuList={MAIN_MENU_LIST.filter((menu) => menu.visible)} />
            <main id="content">{children}</main>
            <Footer />
        </div>
    );
};

export default React.memo(MainLayout);
