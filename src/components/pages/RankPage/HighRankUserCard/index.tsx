import Avatar from '@/components/common/Avatar';
import { I_TIER_RANK } from '@/types/rank';
import React from 'react';
import { getTierImage } from '../service';
import './style.css';

interface I_PROPS {
    width?: number;
    height?: number;
    color?: string;
    style?: Object;
    data: I_TIER_RANK;
}
const HighRankUserCard: React.FC<I_PROPS> = ({
    width,
    height,
    color,
    style = {},
    data,
}) => {
    return (
        <article
            className="highest-user"
            style={{
                width: width ? `${width}px` : '',
                height: height ? `${height}px` : '',
                backgroundColor: color ? color : '',
                ...style,
            }}
        >
            <span className="highest-user__rank">{data.rank}</span>
            <div className="highest-user__avatar">
                <Avatar
                    width={70}
                    height={70}
                    imgUrl={data.profileImageUrl ?? '/assets/imgs/logo.png'}
                />
            </div>

            <p className="highest-user__name">
                {data.username}
                <br />
                <span>{data.name}</span>
            </p>
            <p className="highest-user__tier-info">
                <Avatar
                    width={30}
                    height={30}
                    imgUrl={getTierImage(data.tier)}
                />
                <span className="highest-user__tier-name">{data.tier}</span>
                <span className="highest-user__tier-pt">
                    {data.continuousCommit}pt
                </span>
            </p>
        </article>
    );
};

export default React.memo(HighRankUserCard);
