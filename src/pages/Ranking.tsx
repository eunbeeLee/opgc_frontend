import React from 'react';
import '@/css/ranking.css';

export const Ranking = () => {
    return (
        <div id="ranking">
            <div className="ranking__header">
                <p className="ranking__help-text">
                    OPGC에 총 324,234명의 개발자가 있습니다.<br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
                <form className="ranking__search-form">
                    <input type="text" placeholder="User ID"/>
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div className="ranking__content">
                <table className="ranking-table">
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Commit Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <a className="ranking-user">
                                    <img className="ranking-user__avatar" src="/imgs/logo.png"/>
                                    <span className="ranking-user__text">
                                        jay
                                    </span>
                                </a>
                            </td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <a className="ranking-user">
                                    <img className="ranking-user__avatar" src="/imgs/logo.png"/>
                                    <span className="ranking-user__text">
                                        jay
                                    </span>
                                </a>
                            </td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <a className="ranking-user">
                                    <img className="ranking-user__avatar" src="/imgs/logo.png"/>
                                    <span className="ranking-user__text">
                                        jay
                                    </span>
                                </a>
                            </td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <a className="ranking-user">
                                    <img className="ranking-user__avatar" src="/imgs/logo.png"/>
                                    <span className="ranking-user__text">
                                        jay
                                    </span>
                                </a>
                            </td>
                            <td>35</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};