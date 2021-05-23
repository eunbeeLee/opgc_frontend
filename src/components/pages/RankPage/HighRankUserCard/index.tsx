import Avatar from '@/components/common/Avatar';
import { Link } from 'react-router-dom';
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
        <Link to={`/users/${data.username}`}>
            <article
                className="highest-user"
                data-rank={data.rank}
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
                        width={25}
                        height={25}
                        imgUrl={getTierImage(data.tier)}
                    />
                    <span className="highest-user__tier-name">{data.tier}</span>
                    <span className="highest-user__tier-pt">
                        {data.continuousCommit}pt
                    </span>
                </p>
            </article>
        </Link>
    );
};

export default React.memo(HighRankUserCard);
