import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUser } from '@/modules/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { ActionFunction1 } from 'redux-actions'
import { Action } from 'redux'
import { RouteComponentProps } from 'react-router'
import RepoList from '@/components/user/RepoList'
import { User } from '@/services/user'
import './UserPage.css'

interface IMatchParams {
    userId: string
}

interface IProps extends RouteComponentProps<IMatchParams> {
    user: User
    getUser: ActionFunction1<string, Action<string>>
}

const UserPage: React.FC<IProps> = ({ match, user, getUser }) => {
    const { userId } = match.params

    useEffect(() => {
        getUser(userId)
    }, [userId])

    return (
        <div id="user-info">
            <div className="user-info__refresh">
                <button>
                    <FontAwesomeIcon
                        icon={faSync}
                        className="user-info__refresh-btn"
                    />
                </button>
                <span className="user-info__refresh-date">
                    Last updated: {user.updated}
                </span>
            </div>
            {/* Top */}
            <section className="user-info__summary">
                <div className="user-info-account">
                    <div className="user-info-account__profile">
                        <div className="user-info-account__profile__column">
                            <img
                                className="user-info-account__avatar"
                                width="100"
                                src={
                                    user.profileImgUrl ||
                                    '/assets/imgs/logo.png'
                                }
                                alt={`${user.username}'s photo`}
                            />
                        </div>
                        <div className="user-info-account__profile__column">
                            <div className="user-info-account__name">
                                {user.username}
                            </div>
                            <br />
                            <div className="user-info-account__id">
                                {userId}
                            </div>
                        </div>
                    </div>
                    <p className="user-info-account__desc">{user.desc}</p>
                </div>
                <div className="user-info__counts">
                    {/* <div className="user-info__count">
                    <h3>Commits</h3>
                    <span>478</span>
                </div> */}
                    <div className="user-info__count">
                        <h3>Repositories</h3>
                        <span>{user.repositories.length}</span>
                    </div>
                    <div className="user-info__count">
                        <h3>Followers</h3>
                        <span>{user.followersCnt}</span>
                    </div>
                    <div className="user-info__count">
                        <h3>Followings</h3>
                        <span>{user.followingCnt}</span>
                    </div>
                </div>
            </section>

            {/* Bottom */}
            <section className="user-info__detail">
                <section>
                    <h1>Repositories</h1>
                    <RepoList repos={user?.repositories} />
                </section>
            </section>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user: user.user,
})

export default connect(mapStateToProps, { getUser })(UserPage)
