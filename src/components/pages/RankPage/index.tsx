import React, { ChangeEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeSearchId, getUsers } from '@/modules/ranking';
import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';

import './style.css';
import RankTable from './RankTable';
import FilterNav from './FilterNav';

interface I_PROPS {
    users?: I_USER[];
    totalUsersCnt?: number;
    getUsers?: ActionFunctionAny<Action<any>>;
}

const RankPage: React.FC<I_PROPS> = ({ users, totalUsersCnt, getUsers }) => {
    const [searchedId, setSearchedId] = useState<string>('');

    useEffect(() => {
        getUsers();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        getUsers(searchedId);
    };

    const handleChangeSearchedId = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setSearchedId(value);
    };

    const handleChangeFilter = (e: any) => {
        console.log(e);
    }

    return (
        <div id="ranking">
            <div className="ranking__nav">
                <FilterNav onChange={handleChangeFilter}/>
                <form className="ranking__search-form" onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        name="serached_id" 
                        placeholder="User ID" 
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
                <RankTable users={users} />
            </div>
        </div>
    );
};

const mapStateToProps = ({
    ranking: { users, searchId, totalUsersCnt },
}): any => ({
    users,
    searchId,
    totalUsersCnt,
});

const mapDispatchToProps = {
    changeSearchId,
    getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankPage);
