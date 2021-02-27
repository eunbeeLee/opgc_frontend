import React from 'react';

interface I_PROPS {}

const FollowingsView: React.FC<I_PROPS> = () => {
    return (
        <h1>
            FollowingsView!!!
        </h1>
    )
}

export default React.memo(FollowingsView);