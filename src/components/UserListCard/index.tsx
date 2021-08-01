import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import { E_ROUND_TYPE } from '@/components/Avatar/type';
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
            style={{ cursor: 'pointer' }}
            key={`${user.username}`}
        >
            <div className="c-user-list-card">
                <Avatar
                    width={70}
                    height={70}
                    imgUrl={user.profileImgUrl || '/assets/imgs/logo.png'}
                    style={{ margin: '8px 8px 0px 8px' }}
                />
                <div
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    <Avatar
                        width={25}
                        height={25}
                        imgUrl={getTierImage(user.tier)}
                    />
                    <span
                        style={{
                            verticalAlign: 'text-top',
                        }}
                    >
                        {' '}
                        {user.username}
                    </span>
                </div>
                <div className="c-user-list-card__inform">
                    <span>{user.name || '-'}</span>
                </div>
                <div className="c-user-list-card__inform">
                    <FontAwesomeIcon icon={faTrophy} />
                    <span> {user.rank}</span>
                </div>
                <div className="c-user-list-card__inform">
                    <FontAwesomeIcon icon={faBuilding} />
                    <span> {user.company || '-'}</span>
                </div>
                <div className="c-user-list-card__inform">
                    <FontAwesomeIcon icon={faCode} />
                    <span> {user.totalContributionCnt}</span>
                </div>
                <div className="c-user-list-card__inform">
                    <FontAwesomeIcon icon={faStar} />
                    <span> {user.totalStarCnt}</span>
                </div>
                <div className="c-user-list-card__inform">
                    <span className="c-user-list-card__belong-title-title">
                        a member of
                    </span>
                    <div style={{ marginTop: '5px' }}>
                        {user.organizations.length > 0 && (
                            <div className="c-user-list-card__organization">
                                {user.organizations.map((organization, idx) => {
                                    if (idx < 7)
                                        return (
                                            <Avatar
                                                key={organization.name}
                                                type={E_ROUND_TYPE.RECTANGLE}
                                                imgUrl={
                                                    organization.logoUrl ||
                                                    '/assets/imgs/logo.png'
                                                }
                                                width="18"
                                                height="18"
                                                title={organization.name}
                                            />
                                        );
                                })}
                                {user.organizations.length >= 7 && (
                                    <span>...</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default React.memo(UserListCard);
