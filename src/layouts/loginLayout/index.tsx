import React from 'react';

interface I_PROPS {
    children?: any;
}

const LoginLayout: React.FC<I_PROPS> = ({ children }) => {
    return (
        <div>
            <h1>LoginLayout</h1>
            <div>{children}</div>
        </div>
    );
};

export default React.memo(LoginLayout);
