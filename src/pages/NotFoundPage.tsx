import React from 'react';

interface I_PROPS {}

const NotFoundPage: React.FC<I_PROPS> = () => {
    return (
        <div>
            페이지를 찾을 수 없습니다.
        </div>
    )
}

export default React.memo(NotFoundPage)