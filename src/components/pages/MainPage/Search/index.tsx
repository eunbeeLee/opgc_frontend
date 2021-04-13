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
    const [isFocus, setIsFocus] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getFavorites());
        dispatch(getHistories());
    }, []);

    const handleSearchUser = (e) => {
        e.preventDefault();
        dispatch(addHistory(userId));
        historyAPI.push(`/users/${userId}`);
    };

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSearchUser}>
                <input
                    type="text"
                    value={userId}
                    placeholder="github 아이디"
                    onChange={({ target: { value } }) => {
                        setUserId(value);
                    }}
                    onFocus={() => setIsFocus(true)}
                />
                <input type="submit" value="검색" />
            </form>
            {isFocus && <Recommand />}
        </div>
    );
};

export default Search;
