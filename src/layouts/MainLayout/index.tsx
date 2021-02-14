import React from 'react'
import Header from './Header'
import Footer from './Footer'

import './index.css'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router'

interface I_Props {
    menuList: I_MENU[],
    children?: any,
}

export const MainLayout: React.FC<I_Props> = ({ menuList, children }) => {
    const { url: basePath } = useRouteMatch();

    return (
        <>
            <Header menuList={menuList.filter(menu => menu.visible)} />
            <main id="content">
                <Switch>
                    {
                        menuList.map(menu => (
                            <Route
                                path={`${basePath}${menu.path}`}
                                component={menu.component}
                                key={menu.name}
                            />
                        ))
                    }
                    <Redirect path={basePath} to={`${basePath}${menuList[0].path}`} exact/>
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default React.memo(MainLayout);
