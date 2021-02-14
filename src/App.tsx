import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginLayout, MainLayout } from '@/layouts'
import '@/assets/css/index.css'
import { MAIN_MENU_LIST } from '@/constants/application'
import { LoginPage, NotFoundPage } from './pages'
import { Redirect } from 'react-router'

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginLayout>
                    <LoginPage />
                </LoginLayout>
            </Route>
            <Route path="/main">
                <MainLayout menuList={MAIN_MENU_LIST} />
            </Route>
            <Redirect exact path="/" to="/main"/>
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default App
