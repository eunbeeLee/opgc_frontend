import React, { useState } from 'react';
import { TABS } from './constants';
import { I_TAB } from './types';

interface I_PROPS {}

const Recommand: React.FC<I_PROPS> = () => {
    const [tab, setTab] = useState<I_TAB>(TABS[0]);

    return (
        <div className="search__recommand recommand">
            <ul>
                {TABS.map((tab) => (
                    <li key={tab.name} onClick={() => setTab(tab)}>
                        {tab.display}
                    </li>
                ))}
            </ul>
            <tab.component />
        </div>
    );
};

export default Recommand;
