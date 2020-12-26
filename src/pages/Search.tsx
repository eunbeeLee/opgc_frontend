import React from 'react';
import { connect } from 'react-redux';
import { action1 } from '@/modules/search';
import '@/css/search.css'

const Search = () => {
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

export const SearchPage = connect(state => ({}), { action1 })(Search);