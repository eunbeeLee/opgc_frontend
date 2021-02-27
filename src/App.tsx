import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginLayout, MainLayout } from '@/components/layouts';
import '@/assets/css/index.css';
import { LoginPage, NotFoundPage } from './components/pages';
import { Redirect } from 'react-router';
import { MAIN_MENU_LIST } from './constants/application';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginLayout><LoginPage /></LoginLayout>
            </Route>
            {
                MAIN_MENU_LIST.map(menu => (
                    <Route path={menu.path}>
                        <MainLayout>
                            {React.createElement(menu.component, null)}
                        </MainLayout>                        
                    </Route>
                ))
            }
            <Redirect exact path="/" to={MAIN_MENU_LIST[0].path} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default App;
