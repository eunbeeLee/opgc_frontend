import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLayout from '@/layouts/defaultLayout'
import { MAIN_MENU_LIST } from '@/constants/application';
import '@/assets/css/index.css';

const App: React.FC = () => {
    return (
        <Switch>
            <Route path="/"><DefaultLayout menuList={MAIN_MENU_LIST} /></Route>
            <Route path="/login" render={() => <h1>Login Page</h1>} />
        </Switch>
    )
};

export default App;
