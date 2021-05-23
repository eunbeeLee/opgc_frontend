import Avatar from '@/components/common/Avatar';
import React from 'react';
import { I_COLUMN } from '@/components/common/Table/types';
import { Link } from 'react-router-dom';
import { I_RANK } from '@/types/rank';

export const COLUMNS: I_COLUMN[] = [
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
        key: true,
    },
    {
        display: '티어',
        name: 'tier',
    },
    {
        display: '점수',
        name: 'continuousCommit',
    },
];
