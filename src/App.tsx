import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from '@/layouts/defaultLayout'
import { MAIN_MENU_LIST } from '@/constants/menu';
import '@/css/index.css';

const App = () => {
    return (
        <Switch>
            <Route path="/main"><DefaultLayout menuList={MAIN_MENU_LIST} /></Route>
            <Route path="/login" render={() => <h1>Login Page</h1>} />
        </Switch>
    )
};

export default App;
