import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginLayout, MainLayout } from '@/components/layouts';
import '@/assets/css/index.css';
import { LoginPage, NotFoundPage, RankPage, SearchPage, UserPage } from './components/pages';
import { Redirect } from 'react-router';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginLayout><LoginPage /></LoginLayout>
            </Route>
            <Route exact path="/search">
                <MainLayout><SearchPage /></MainLayout>
            </Route>
            <Route exact path="/rank">
                <MainLayout><RankPage /></MainLayout>
            </Route>
            <Route exact path="/user/:userId">
                <MainLayout><UserPage /></MainLayout>
            </Route>
            <Redirect exact path="/" to="/search" />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default App;
