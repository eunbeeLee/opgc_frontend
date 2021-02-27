import React from 'react';

interface I_PROPS {}

const FollowersView: React.FC<I_PROPS> = () => {
    return (
        <h1>
            FollowersView
        </h1>
    )
}

export default React.memo(FollowersView);