import Avatar from '@/components/common/Avatar';
import { E_ROUND_TYPE } from '@/components/common/Avatar/type';
import { I_USER } from '@/types/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './style.css';

interface I_PROPS {
    user: I_USER | null;
}

const UserInfo: React.FC<I_PROPS> = ({ user }) => {
    return user && (
        <>
                <div className="user-info-account">
                    <div className="user-info-account__profile">
                        <Avatar
                            type={E_ROUND_TYPE.RECTANGLE}
                            imgUrl={ user.profileImageUrl || '/assets/imgs/logo.png' }
                            width={170}
                            height={170}
                        />
                        <div className="user-info-account__profile__column">
                            <div className="user-info-account__name">
                                {user.username} <span className="user-info-account__id">@{user.username}</span>
                            </div>
                            <div className="user-info-account__desc">
                                {user.desc}
                                <div className="user-info-account__belong">
                                    {
                                        user.company && (
                                            <span className="user-info-account__company">
                                                🏢 {user.company},
                                            </span>
                                        )
                                    }
                                    {
                                        user.organizations.map(o => (
                                            <Avatar
                                                key={o.name}
                                                type={E_ROUND_TYPE.RECTANGLE}
                                                imgUrl={o.logoUrl || '/assets/imgs/logo.png'}
                                                width={25}
                                                height={25}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="user-info-account__values">
                    <li className="user-info-account__value">
                        <h3>📦 Repositories</h3>
                        <span>{user.repositories.length}</span>
                    </li>
                    <li className="user-info-account__value">
                        <h3>
                            
                            Followers
                        </h3>
                        <span>{user.followersCnt}</span>
                    </li>
                    <li className="user-info-account__value">
                        <h3>
                            <FontAwesomeIcon icon={faBuilding} className="user-info__refresh-btn"/>
                            Followings
                        </h3>
                        <span>{user.followingCnt}</span>
                    </li>
                    <li className="user-info-account__value"> 
                        <h3>
                            <FontAwesomeIcon icon={faBuilding} className="user-info__refresh-btn"/>
                            Contribution
                        </h3>
                        <span>{user.totalContributionCnt}</span>
                    </li>
                    <li className="user-info-account__value">
                        <h3>
                            <FontAwesomeIcon icon={faBuilding} className="user-info__refresh-btn"/>
                            Stars
                        </h3>
                        <span>{user.totalStarCnt}</span>
                    </li>
                </ul>
        </>
    );
};

export default React.memo(UserInfo);