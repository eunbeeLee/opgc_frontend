import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchedId } from '@/modules/rank';

import './style.css';
import FilterNav from './FilterNav';
import { Route, Switch } from 'react-router';
import { RANK_MENUS } from './constants';
import { T_ROOT_REDUCER } from '@/modules';

interface I_PROPS {}

const RankPage: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const { totalUsersCnt, searchId } = useSelector((state: T_ROOT_REDUCER) => state.rank);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('::: handleSearch');
    };

    const handleChangeSearchedId = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchedId(value));
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
            <div className="ranking__header">
                <p className="ranking__help-text">
                    OPGC에 총 {totalUsersCnt}명의 개발자가 있습니다.
                    <br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
            </div>
            <div className="ranking__content">
                <Switch>
                    {
                        RANK_MENUS.map((menu, idx) => (
                            <Route 
                                key={menu.name}
                                path={menu.path} 
                                component={menu.component}
                            />
                        ))
                    }
                </Switch>
            </div>
        </div>
    );
};

export default React.memo(RankPage);
