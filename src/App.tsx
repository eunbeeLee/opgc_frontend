import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginLayout, MainLayout } from '@/components/layouts';
import '@/assets/css/index.css';
import { LoginPage, NotFoundPage } from './components/pages';
import { Redirect } from 'react-router';
import { MAIN_MENU_LIST } from './constants/application';
import Loading from './components/common/Loading';
import { useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from './modules';

const App: React.FC = () => {
    const { loading } = useSelector((state: T_ROOT_REDUCER) => state.ui);

    return (
        <>
            {loading && <Loading />}
            <Switch>
                <Route exact path="/login">
                    <LoginLayout>
                        <LoginPage />
                    </LoginLayout>
                </Route>
                {MAIN_MENU_LIST.map((menu) => (
                    <Route path={menu.path} key={menu.name}>
                        <MainLayout>
                            {React.createElement(menu.component, null)}
                        </MainLayout>
                    </Route>
                ))}
                <Redirect exact path="/" to={MAIN_MENU_LIST[0].path} />
                <Route component={NotFoundPage} />
            </Switch>
        </>
    );
};

export default App;
