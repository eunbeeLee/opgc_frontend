import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'DirtyBoyz/opgc-comment-log';
const theme = 'github-light';

interface I_PROPS {
    id?: string;
}

const Utterances: React.FC<I_PROPS> = ({ id = '' }) => {
    const containerRef = createRef<HTMLDivElement>();

    useLayoutEffect(() => {
        const utterances = document.createElement('script');
        const term = id ?? location.pathname;

        const attributes = {
            src,
            repo,
            theme,
            'issue-term': term,
            crossOrigin: 'anonymous',
            async: 'true',
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        containerRef.current!.appendChild(utterances);
    }, [repo]);

    return <div ref={containerRef} />;
};

Utterances.displayName = 'Utterances';

export default React.memo(Utterances);
