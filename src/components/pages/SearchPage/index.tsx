import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';

interface I_PROPS {}

const SearchPage: React.FC<I_PROPS> = () => {
    const [ userId, setUserId ] = useState<string>('');
    const history = useHistory();

    const handleSearchUser = (e) => {
        e.preventDefault();
        history.push(`/users/${userId}`);
    };

    const handleChangeUserId = (e) => {
        setUserId(e.target.value);
    };

    return (
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
    );
};

export default React.memo(SearchPage);
