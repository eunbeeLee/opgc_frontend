import LoginLayout from '@/layouts/LoginLayout';
import React from 'react';

interface I_PROPS {}

const LoginPage: React.FC<I_PROPS> = () => {
    return (
        <LoginLayout>
            <div>Login Page</div>
        </LoginLayout>
    );
};

export default React.memo(LoginPage);
