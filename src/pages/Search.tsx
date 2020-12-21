import React from 'react';
import '@/css/search.css'

export const Search = () => {
    return (
        <section id="search">
            <img className="search__main-logo" src="/imgs/search/index-logo.png"/>
            <form className="search__form">
                <input type="text" placeholder="Github User Name"/>
                <input type="submit" value="CHECK!" />
            </form>
        </section>
    );
};