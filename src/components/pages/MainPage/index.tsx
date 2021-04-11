import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import './style.css';
import { CONTRI_COLUMNS } from './constants';
import {actions, T_ROOT_REDUCER} from "@/modules";
import {useDispatch, useSelector} from "react-redux";
import Table from "@/components/common/Table";

interface I_PROPS {}

const SearchPage: React.FC<I_PROPS> = () => {
    const [ userId, setUserId ] = useState<string>('');
    const history = useHistory();
    const action = actions.rank.continuousCommitDay;
    const dispatch = useDispatch();
    const { root: { searchId }, continuous_commit_day: { ranks } } = useSelector((state: T_ROOT_REDUCER) => state.rank);

    const handleSearchUser = (e) => {
        e.preventDefault();
        history.push(`/users/${userId}`);
    };

    const handleChangeUserId = (e) => {
        setUserId(e.target.value);
    };

    useEffect(() => {
        dispatch(action.getRanks(searchId));
    }, [])

    return (
        <div className="search__wrap">
            <section id="search">
                <img
                    className="search__main-logo"
                    src="/assets/imgs/search/index-logo.png"
                />
                <form className="search__form" onSubmit={handleSearchUser}>
                    <input
                        type="text"
                        placeholder="Github User Name"
                        onChange={handleChangeUserId}
                    />
                    <input type="submit" value="CHECK!" />
                </form>
            </section>

            {/* 1일 1커밋 */}
            <section>
                <h1>1일 1커밋을 실천하는 개발자 랭킹 🌱</h1><br />
                <div>좀 더 다양한 랭킹은 상단 Rank 탭을 이용하세요.</div>
                <div className="ranking__content">
                    <Table columns={CONTRI_COLUMNS} data={ranks}/>
                </div>
            </section>
        </div>
    );
};

export default React.memo(SearchPage);
