import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import Recommand from './Recommand';
import './style.css';

interface I_PROPS {}

const Search: React.FC<I_PROPS> = () => {
    const { recommand } = useSelector(
        (state: T_ROOT_REDUCER) => state.ui.mainPage
    );
    const { setRecommand } = actions.ui.mainPage;
    const { getFavorites, getHistories, addHistory } = actions.search;
    const dispatch = useDispatch();
    const historyAPI = useHistory();
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        dispatch(getFavorites());
        dispatch(getHistories());
    }, []);

    const searchUser = (id) => {
        dispatch(addHistory(id));
        historyAPI.push(`/users/${id}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchUser(userId);
    };

    return (
        <>
            <div
                className="main-page__search search"
                onClick={(e) => e.stopPropagation()}
            >
                <form className="search__form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={userId}
                        placeholder="github 아이디"
                        onChange={({ target: { value } }) => {
                            setUserId(value);
                        }}
                        onFocus={() => dispatch(setRecommand(true))}
                    />
                    <input type="submit" value="검색" />
                </form>
                {recommand && <Recommand onSelect={searchUser} />}
            </div>
        </>
    );
};

export default Search;
