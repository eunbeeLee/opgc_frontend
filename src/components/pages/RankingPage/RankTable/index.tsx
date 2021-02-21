import React from 'react';
import './style.css';

interface I_PROPS {
    users: I_USER[]
}

const RankTable: React.FC<I_PROPS> = ({ users }) => {
    return (
        <table className="ranking-table">
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Commit Count</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.rank}</td>
                        <td>
                            <a className="ranking-user">
                                <img
                                    className="ranking-user__avatar"
                                    src="/assets/imgs/logo.png"
                                />
                                <span className="ranking-user__text">
                                    {user.id}
                                </span>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RankTable;