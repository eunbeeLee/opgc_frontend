import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeSearchId, getUsers } from '@/modules/ranking';
import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';

import './style.css';
import RankTable from './RankTable';

interface I_PROPS {
    users?: I_USER[];
    totalUsersCnt?: number;
    getUsers?: ActionFunctionAny<Action<any>>;
}

const RankingPage: React.FC<I_PROPS> = ({ users, totalUsersCnt, getUsers }) => {
    useEffect(() => {
        getUsers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        getUsers('jay');
    };

    return (
        <div id="ranking">
            <div className="ranking__header">
                <p className="ranking__help-text">
                    OPGC에 총 {totalUsersCnt}명의 개발자가 있습니다.
                    <br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
                <form className="ranking__search-form" onSubmit={handleSubmit}>
                    <input type="text" name="serach_id" placeholder="User ID" />
                    <input type="submit" value="Search" />
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
