import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/modules';

import './style.css';
import FilterNav from './FilterNav';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router';
import { RANK_MENUS } from './constants';
import { T_ROOT_REDUCER } from '@/modules';

interface I_PROPS {}

const RankPage: React.FC<I_PROPS> = () => {
    const action = actions.rank.root;
    const match = useRouteMatch();
    const dispatch = useDispatch();
    const { searchId } = useSelector((state: T_ROOT_REDUCER) => state.rank.root);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('::: handleSearch');
    };

    const handleChangeSearchedId = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        dispatch(action.changeSearchId(value));
    };

    return (
        <div id="ranking">
            <div className="ranking__nav">
                <FilterNav />
                <form className="ranking__search-form" onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        name="serached_id" 
                        placeholder="Github ID" 
                        value={searchId}
                        onChange={handleChangeSearchedId}
                    />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <Switch>
                {
                    RANK_MENUS.map(menu => (
                        <Route 
                            key={menu.name}
                            path={menu.path} 
                            component={menu.component}
                        />
                    ))
                }
                <Redirect exact path={match.path} to={RANK_MENUS[0].path} />
            </Switch>
        </div>
    );
};

export default React.memo(RankPage);
