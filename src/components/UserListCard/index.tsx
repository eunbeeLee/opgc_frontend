import React from 'react';
import { Link } from 'react-router-dom';
import {
    faBuilding,
    faCode,
    faStar,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTierImage } from '@/services/userInfo';
import './style.css';

interface I_PROPS {
    data: I_USER;
}

const UserListCard: React.FC<I_PROPS> = ({ data: user }) => {
    return (
        <Link
            to={`/users/${user.username}`}
            key={`${user.username}`}
            className="c-user-list-card"
        >
            <div className="c-user-list-card__avatar-wrap">
                <img
                    className="c-user-list-card__avatar"
                    src={user.profileImgUrl || '/assets/imgs/logo.png'}
                />
            </div>
            <div className="c-user-list-card__title-wrap">
                <div className="c-user-list-card__id">
                    {/* <img src={getTierImage(user.tier)} className="pc-only" /> */}
                    {user.username}
                </div>
                <div className="c-user-list-card__name">{user.name || '-'}</div>
            </div>
            <ul className="c-user-list-card__infos">
                <li className="c-user-list-card__tier">
                    <img src={getTierImage(user.tier)} />
                    {user.tier}
                </li>
                <li>
                    <FontAwesomeIcon icon={faTrophy} />
                    <span> {user.rank}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faBuilding} />
                    <span> {user.company || '-'}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode} />
                    <span> {user.totalContributionCnt}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faStar} />
                    <span> {user.totalStarCnt}</span>
                </li>
                <li>
                    {user.organizations.map((organization) => (
                        <img
                            className="c-user-list-card__organization"
                            key={organization.name}
                            src={
                                organization.logoUrl || '/assets/imgs/logo.png'
                            }
                            title={organization.name}
                        />
                    ))}
                </li>
            </ul>
        </Link>
    );
};

export default React.memo(UserListCard);
