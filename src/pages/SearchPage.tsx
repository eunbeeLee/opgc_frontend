import React from 'react'
import './SearchPage.css'

interface I_PROPS {}

const SearchPage: React.FC<I_PROPS> = () => {
    return (
        <section id="search">
            <img
                className="search__main-logo"
                src="/assets/imgs/search/index-logo.png"
            />
            <form className="search__form">
                <input type="text" placeholder="Github User Name" />
                <input type="submit" value="CHECK!" />
            </form>
        </section>
    )
}

export default React.memo(SearchPage);
