import React, { ReactElement, useCallback, useRef } from 'react';
import './style.css';

interface I_PROPS {
    children?: ReactElement;
    onClick?: () => void;
}
const Overlay: React.FC<I_PROPS> = ({ children, onClick = () => {} }) => {
    const overlayRef = useRef(null);
    const handleClickOverlay = useCallback((e) => {
        if (e.target === overlayRef.current) {
            onClick();
        }
    }, []);
    return (
        <div
            className="c-overlay"
            onClick={handleClickOverlay}
            ref={overlayRef}
        >
            {children}
        </div>
    );
};

export default React.memo(Overlay);
