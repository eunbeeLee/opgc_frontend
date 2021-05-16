import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './style.css';

interface I_PROPS {
    children?: any;
}

const LoginLayout: React.FC<I_PROPS> = ({ children }) => {
    const handleBack = useCallback(() => {
        history.back();
    }, []);

    return (
        <div className="error-layout">
            <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ fontSize: '5rem' }}
            />
            <div className="error-layout__content">{children}</div>
            <a className="error-layout__back" href="#" onClick={handleBack}>
                이전페이지로 돌아가기
            </a>
        </div>
    );
};

export default React.memo(LoginLayout);
