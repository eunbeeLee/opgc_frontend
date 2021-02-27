import React from 'react';

interface I_PROPS {}

const ContributionView: React.FC<I_PROPS> = () => {
    return (
        <h1>
            ContributionView!!!
        </h1>
    )
}

export default React.memo(ContributionView);