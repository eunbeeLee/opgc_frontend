import Avatar from '@/components/Avatar';
import React from 'react';
import { I_COLUMN } from '@/components/Table/types';
import { Link } from 'react-router-dom';

export const CONTRI_COLUMNS: I_COLUMN[] = [
    {
        display: '순위',
        name: 'rank',
        key: true,
        // width: 100,
    },
    {
        display: '아이디',
        name: 'githubId',
        render: (d: I_RANK): React.ReactElement => {
            return (
                <Link to={`/users/${d.username}`} style={{ cursor: 'pointer' }}>
                    <Avatar
                        width={30}
                        height={30}
                        imgUrl={d.profileImageUrl || '/assets/imgs/logo.png'}
                        style={{ transform: 'translateY(calc(50% - 5px))' }}
                    />
                    <span style={{ marginLeft: '5px', cursor: 'inherit' }}>
                        {d.username}
                    </span>
                </Link>
            );
        },
        // style: { textAlign: 'left' },
    },
    {
        display: '점수',
        name: 'score',
    },
];
