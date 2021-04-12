import Avatar from '@/components/common/Avatar';
import { E_ROUND_TYPE } from '@/components/common/Avatar/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPuzzlePiece, faCube, faUserFriends,  } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import React, { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive'
import './style.css';

interface I_PROPS {
    user: User;
}

const UserInfo: React.FC<I_PROPS> = ({ user }) => {
    const countInfo = useMemo(() => ([
        { icon: faCube, title: 'Repositories', name: 'repositories', value: user.repositories.length },
        { icon: faUserFriends, title: 'Followers', name: 'repositories', value: user.followersCnt },
        { icon: faGratipay, title: 'Followings', name: 'repositories', value: user.followingCnt },
        { icon: faPuzzlePiece, title: 'Contribution', name: 'repositories', value: user.totalContributionCnt },
        { icon: faStar, title: 'Stars', name: 'repositories', value: user.totalStarCnt },
    ]), [ user ]);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 769px)'
    })

    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 769px)'
    })

    return user && (
        <>
            {/* 데스크탑 화면 */}
            {isDesktopOrLaptop && <div className="user-info-account">
                <div className="user-info-account__profile">
                    <a href={user.githubUrl} target="_blank">
                        <Avatar
                            type={E_ROUND_TYPE.RECTANGLE}
                            imgUrl={ user.profileImgUrl || '/assets/imgs/logo.png' }
                            width={170}
                            height={170}
                        />
                    </a>
                    <div className="user-info-account__profile__info">
                        <ul className="user-info-account__values">
                            {
                                countInfo.map((count) => (
                                    <li className="user-info-account__value" key={count.name}>
                                        <h3>
                                            {count.icon && <FontAwesomeIcon icon={count.icon} className="user-info-account__value__icon"/>}
                                            <span className="user-info-account__value__title">{count.title}</span>
                                        </h3>
                                        <span>{count.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="user-info-account__name">
                            <a href={user.githubUrl} target="_blank">{user.name || user.username}</a>
                            {user.name && <span className="user-info-account__id">@{user.username}</span>}
                        </div>
                        <div className="user-info-account__desc">
                            {user.desc}
                            <div className="user-info-account__belong">
                                {
                                    user.company && (
                                        <div className="user-info-account__company">
                                            <span className="user-info-account__belong-title">working at</span> {user.company}
                                        </div>
                                    )
                                }
                                {

                                    user.organizations.length > 0 && (
                                        <div className="user-info-account__organization">
                                            <span className="user-info-account__belong-title"> a member of</span> {
                                                user.organizations.map(o => (
                                                    <Avatar
                                                        key={o.name}
                                                        type={E_ROUND_TYPE.RECTANGLE}
                                                        imgUrl={o.logoUrl || '/assets/imgs/logo.png'}
                                                        width={25}
                                                        height={25}
                                                        title={o.name}
                                                    />
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {/* 모바일 화면 */}
            {isMobileDevice && <div className="user-info-account">
                <div className="user-info-account__profile">
                    <a href={user.githubUrl} target="_blank">
                        <Avatar
                            type={E_ROUND_TYPE.RECTANGLE}
                            imgUrl={ user.profileImgUrl || '/assets/imgs/logo.png' }
                            width={170}
                            height={170}
                        />
                    </a>
                    <div className="user-info-account__profile__info">
                        <div className="user-info-account__name">
                            <a href={user.githubUrl} target="_blank">{user.name || user.username}</a>
                            {user.name && <div><span className="user-info-account__id">@{user.username}</span></div>}
                        </div>
                        <div className="user-info-account__desc">
                            {user.desc}
                            <div className="user-info-account__belong">
                                {
                                    user.company && (
                                        <div className="user-info-account__company">
                                            <span className="user-info-account__belong-title">working at</span> {user.company}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member__wrap">
                    {
                        user.organizations.length > 0 && (
                            <div className="user-info-account__organization">
                                <span className="user-info-account__belong-title"> a member of</span> {
                                    user.organizations.map(o => (
                                        <Avatar
                                            key={o.name}
                                            type={E_ROUND_TYPE.RECTANGLE}
                                            imgUrl={o.logoUrl || '/assets/imgs/logo.png'}
                                            width={25}
                                            height={25}
                                            title={o.name}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <div>
                    <ul className="user-info-account__values">
                        {
                            countInfo.map((count) => (
                                <li className="user-info-account__value" key={count.name}>
                                    <h3>
                                        {count.icon && <FontAwesomeIcon icon={count.icon} className="user-info-account__value__icon"/>}
                                        <span className="user-info-account__value__title">{count.title}</span>
                                    </h3>
                                    <span>{count.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>}
        </>
    );
};

export default React.memo(UserInfo);