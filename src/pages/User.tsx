import React from 'react';
import { connect } from 'react-redux';
import { action1 } from '@/modules/user';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import '@/css/user.css';

const User = () => {
    return (
        <div id="user-info">
            <div className="user-info__refresh">
                <button><FontAwesomeIcon icon={faSync} className="user-info__refresh-btn"/></button>
                <span className="user-info__refresh-date">Last updated: 2020-02-01 19:22:10</span>
            </div>
            {/* Top */}
            <section className="user-info__summary">
            <div className="user-info-account">
                <div className="user-info-account__profile">
                    <div className="user-info-account__profile__column">
                        <img className="user-info-account__avatar" src="/imgs/logo.png" alt="JayJi Photo" />
                    </div>
                    <div className="user-info-account__profile__column">
                        <div className="user-info-account__name">JayJi</div><br/>
                        <div className="user-info-account__id">jay-chan9yu</div>
                    </div>
                </div>
                <p className="user-info-account__desc">
                    Fitware(Fitness + Software) Developer Republic of Korea
                </p>
            </div>
            <div className="user-info__counts">
                <div className="user-info__count">
                    <h3>Commits</h3>
                    <span>478</span>
                </div>
                <div className="user-info__count">
                    <h3>Repositories</h3>
                    <span>478</span>
                </div>
                <div className="user-info__count">
                    <h3>Followers</h3>
                    <span>478</span>
                </div>
                <div className="user-info__count">
                    <h3>Followings</h3>
                    <span>478</span>
                </div>
            </div>
        </section>
            
            {/* Bottom */}
            <section className="user-info__detail">
                <section>
                    <h1>Repositories</h1>
                    <div className="user-info__repos">
                        <div className="user-info-repo">
                            <div className="user-info-repo__title">
                                <h2>5boon</h2>
                                <span>this is 5boon Rest API</span>
                            </div>
                            <div className="user-info-repo__detail">
                                <p className="user-info-repo__commits">
                                    <label>Commits</label>
                                    <span>344</span>
                                </p>
                                <ul className="user-info-repo__langauges">
                                    <label>Langauge</label>
                                    <li className="user-info-repo-langauge">
                                        <h3>CSS</h3>
                                        <div className="user-info-repo-langauge__color--css"></div>
                                    </li>
                                    <li className="user-info-repo-langauge">
                                        <h3>JS</h3>
                                        <div className="user-info-repo-langauge__color--js"></div>
                                    </li>
                                    <li className="user-info-repo-langauge">
                                        <h3>Python</h3>
                                        <div className="user-info-repo-langauge__color--python"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="user-info-repo">
                            <div className="user-info-repo__title">
                                <h2>5boon</h2>
                                <span>this is 5boon Rest API</span>
                            </div>
                            <div className="user-info-repo__detail">
                                <p className="user-info-repo__commits">
                                    <label>Commits</label>
                                    <span>344</span>
                                </p>
                                <ul className="user-info-repo__langauges">
                                    <label>Langauge</label>
                                    <li className="user-info-repo-langauge">
                                        <h3>CSS</h3>
                                        <div className="user-info-repo-langauge__color--css"></div>
                                    </li>
                                    <li className="user-info-repo-langauge">
                                        <h3>JS</h3>
                                        <div className="user-info-repo-langauge__color--js"></div>
                                    </li>
                                    <li className="user-info-repo-langauge">
                                        <h3>Python</h3>
                                        <div className="user-info-repo-langauge__color--python"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="user-info-repo">
                            <div className="user-info-repo__title">
                                <h2>5boon</h2>
                                <span>this is 5boon Rest API</span>
                            </div>
                            <div className="user-info-repo__detail">
                                <p className="user-info-repo__commits">
                                    <label>Commits</label>
                                    <span>344</span>
                                </p>
                                <ul className="user-info-repo__langauges">
                                    <label>Langauge</label>
                                    <li className="user-info-repo-langauge">
                                        <h3>CSS</h3>
                                        <div className="user-info-repo-langauge__color--css"></div>
                                    </li>
                                    <li className="user-info-repo-langauge">
                                        <h3>JS</h3>
                                        <div className="user-info-repo-langauge__color--js"></div>
                                    </li>
                                    <li className="user-info-repo-langauge">
                                        <h3>Python</h3>
                                        <div className="user-info-repo-langauge__color--python"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export const UserPage = connect(state => ({}), { action1 })(User);