import React from 'react';
import { I_COLUMN, I_DATA } from './types';
import './style.css';
import { getDataKey, getKeyProperties } from './services';

interface I_PROPS {
    columns: I_COLUMN[];
    data: I_DATA[];
}

const Table: React.FC<I_PROPS> = ({ data, columns }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.name}>{column.display}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={getDataKey(d, getKeyProperties(columns))}>
                        {
                            columns.map(column => (
                                <td key={`${getDataKey(d, getKeyProperties(columns))}_${column.name}`}>
                                    { column.render ? column.render(d) : d[column.name] }
                                </td>
                            ))  
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default React.memo(Table);