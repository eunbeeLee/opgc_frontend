import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

interface I_PROPS {
    router: any[];
    NotFoundPage: any;
}

const RouterView: React.FC<I_PROPS> = ({ router, NotFoundPage }) => {
    const renderRoute = (router) => {
        return router.map((r) => {
            if (!r.children) {
                return (
                    <Route key={r.name} path={r.path} component={r.component} />
                );
            }

            return (
                <Route key={r.name} path={r.path}>
                    <r.component>
                        <Switch>
                            {renderRoute(r.children)}
                            <Redirect
                                exact
                                path={r.path}
                                to={r.children[0].path}
                            />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </r.component>
                </Route>
            );
        });
    };

    return (
        <Switch>
            {renderRoute(router)}
            <Redirect exact path="/" to={router[0].path} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default React.memo(RouterView);
