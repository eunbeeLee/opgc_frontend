import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { getFavorites, getHistories, addHistory } from '@/modules/search';
import Recommand from './Recommand';
import './style.css';

interface I_PROPS {}

const Search: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const historyAPI = useHistory();
    const [userId, setUserId] = useState<string>('');
    const [visibleRecommand, setVisibleRecommand] = useState<boolean>(false);

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
        <div className="main-page__search search">
            <form className="search__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userId}
                    placeholder="github 아이디"
                    onChange={({ target: { value } }) => {
                        setUserId(value);
                    }}
                    onFocus={() => setVisibleRecommand(true)}
                />
                <input type="submit" value="검색" />
            </form>
            <Recommand visible={visibleRecommand} onSelect={searchUser} />
        </div>
    );
};

export default Search;
