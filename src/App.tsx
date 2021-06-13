import React from 'react';
import '@/assets/css/index.css';
import { NotFoundPage } from './containers';
import router from '@/constants/router';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from './modules';
import RouterView from './components/RouterView';

const App: React.FC = () => {
    const { loading } = useSelector((state: T_ROOT_REDUCER) => state.ui.app);

    return (
        <>
            {loading && <Loading />}
            <RouterView router={router} NotFoundPage={NotFoundPage} />
        </>
    );
};

export default App;
