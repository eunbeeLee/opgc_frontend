import React from 'react';
import './style.css';
import './TierView/style.css';
import FilterNav from './FilterNav';

import MainLayout from '@/layouts/MainLayout';

interface I_PROPS {}

const RankPage: React.FC<I_PROPS> = ({ children }) => {
    return (
        <MainLayout>
            <div id="ranking">
                <div className="ranking__nav">
                    <FilterNav />
                </div>
                {children}
            </div>
        </MainLayout>
    );
};

export default React.memo(RankPage);
