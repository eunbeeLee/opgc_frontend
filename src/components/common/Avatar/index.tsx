import React, { useMemo } from 'react';
import { E_ROUND_TYPE } from './type';
import './style.css';

interface I_PROPS {
    width?: number | string;
    height?: number | string;
    imgUrl: string;
    type?: E_ROUND_TYPE;
    style?: any;
    alt?: string;
}

const Avatar: React.FC<I_PROPS> = ({ width = 100, height = 100, imgUrl, type = E_ROUND_TYPE.RECTANGLE, style = {}, alt }) => {
    const typeCss = useMemo(() => {
        switch (type) {
            case E_ROUND_TYPE.RECTANGLE:
                return { borderRadius: '7px'};
            case E_ROUND_TYPE.CIRCLE:
                return { borderRadius: width };
        }
    }, [type]);

    return (
        <img
            width={width}
            height={height}
            className="avatar"
            src={imgUrl}
            style={{ ...typeCss, ...style }}
            alt={alt}
        />
    )
}

export default React.memo(Avatar);