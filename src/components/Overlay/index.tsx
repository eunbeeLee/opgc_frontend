import React, { ReactElement } from 'react';
import './style.css';

interface I_PROPS {
    children?: ReactElement;
}
const Overlay: React.FC<I_PROPS> = ({ children }) => {
    return <div className="c-overlay">{children}</div>;
};

export default React.memo(Overlay);
