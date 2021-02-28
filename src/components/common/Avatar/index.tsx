import React, { useMemo } from 'react';
import { E_ROUND_TYPE } from './type';
import './style.css';

interface I_PROPS {
    width?: number | string;
    height?: number | string;
    imgUrl: string;
    type?: E_ROUND_TYPE;
    style?: any;
}

const Avatar: React.FC<I_PROPS> = ({ width = 100, height = 100, imgUrl, type = E_ROUND_TYPE.CIRCLE, style = {} }) => {
    const typeCss = useMemo(() => {
        switch (type) {
            case E_ROUND_TYPE.RECTANGLE:
                return { borderRadius: `calc(${width} * 0.15)`};
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
        />
    )
}

export default React.memo(Avatar);