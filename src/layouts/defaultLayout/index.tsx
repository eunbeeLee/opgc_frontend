import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '@/css/layout.css';

const DefaultLayout = ({ menuList }) => {
    return (
        <>
            <Header menuList={menuList}/>
            <main id="content">
                <Switch>  
                    { 
                        menuList.map((m) => (
                            <Route path={m.path} component={m.component} exact />
                        ))
                    }
                    <Redirect path="*" to={menuList[0].path} />
                </Switch>  
            </main>
            <Footer />
        </>
    )
};

export default React.memo(DefaultLayout);