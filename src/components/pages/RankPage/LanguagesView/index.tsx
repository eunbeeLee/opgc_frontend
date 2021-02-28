import React from 'react';

interface I_PROPS {}

const LanguagesView: React.FC<I_PROPS> = () => {
    return (
        <h1>
            LanguagesView!!!
        </h1>
    )
}

export default React.memo(LanguagesView);