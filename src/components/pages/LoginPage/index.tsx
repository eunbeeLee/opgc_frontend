import React from 'react';

interface I_PROPS {}

const LoginPage: React.FC<I_PROPS> = () => {
    return <div>Login Page</div>;
};

export default React.memo(LoginPage);
