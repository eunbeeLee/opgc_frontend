import React, { useState } from 'react';
import { TABS } from './constants';
import { I_TAB } from './types';
import './style.css';

interface I_PROPS {
    visible: boolean;
    onSelect: (id: string) => void;
}

const Recommand: React.FC<I_PROPS> = ({ visible, onSelect }) => {
    const [tab, setTab] = useState<I_TAB>(TABS[0]);

    return (
        <div
            className={`search__recommand recommand ${
                visible ? 'visible' : ''
            }`}
        >
            <ul className="recommand__tabs">
                {TABS.map((t) => (
                    <li
                        key={t.name}
                        onClick={() => setTab(t)}
                        className={`recommand__tab ${
                            t.name === tab.name ? 'active' : ''
                        }`}
                    >
                        {t.display}
                    </li>
                ))}
            </ul>
            <div className="recommand__list">
                <tab.component onSelect={onSelect} />
            </div>
        </div>
    );
};

export default Recommand;
