import Avatar from '@/components/Avatar';
import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';
import { getTierImage } from '@/services/userInfo';

interface I_PROPS {
    id: string;
    name: string;
    tier: string;
    rank: number;
    point: number | string;
    profileImgUrl: string;
}
const HighRankUserCard: React.FC<I_PROPS> = ({
    id,
    name,
    tier,
    point,
    rank,
    profileImgUrl,
}) => {
    return (
        <Link to={`/users/${id}`}>
            <article className="highest-user" data-rank={rank}>
                <span className="highest-user__rank">{rank}</span>
                <div className="highest-user__avatar">
                    <Avatar
                        width={70}
                        height={70}
                        imgUrl={profileImgUrl ?? '/assets/imgs/logo.png'}
                    />
                </div>

                <p className="highest-user__name">
                    {name}
                    <br />
                    <span>{id}</span>
                </p>
                <p className="highest-user__tier-info">
                    <Avatar
                        width={25}
                        height={25}
                        imgUrl={getTierImage(tier)}
                    />
                    <span className="highest-user__tier-name">{tier}</span>
                    <span className="highest-user__tier-pt">{point}pt</span>
                </p>
            </article>
        </Link>
    );
};

export default React.memo(HighRankUserCard);
