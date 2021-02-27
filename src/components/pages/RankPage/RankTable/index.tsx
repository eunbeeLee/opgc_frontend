import { I_RANK } from '@/types/rank';
import React from 'react';
import './style.css';

interface I_PROPS {
    ranks: I_RANK[]
}

const RankTable: React.FC<I_PROPS> = ({ ranks = [] }) => {
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
                {ranks.map(rank => (
                    <tr key={rank.id}>
                        <td>{rank.rank}</td>
                        <td>
                            <a className="ranking-user">
                                <img
                                    className="ranking-user__avatar"
                                    src="/assets/imgs/logo.png"
                                />
                                <span className="ranking-user__text">
                                    {rank.githubId}
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