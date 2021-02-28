import React, { useMemo } from 'react';
import './style.css';
import { I_RANK } from './types';

interface I_PROPS {
    data: I_RANK[]
}

const RankTable: React.FC<I_PROPS> = ({ data }) => {
    console.log('::: data', data);
    const columns = useMemo(() => Object.keys(data[0] ?? {}), [data]);

    return (
        <table className="ranking-table">
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key="column">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        <td>{d.rank}</td>
                        <td>
                            <a className="ranking-user">
                                <img
                                    className="ranking-user__avatar"
                                    src="/assets/imgs/logo.png"
                                />
                                <span className="ranking-user__text">
                                    {d.githubId}
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