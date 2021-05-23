import Avatar from '@/components/common/Avatar';
import React from 'react';
import { I_COLUMN } from '@/components/common/Table/types';
import { Link } from 'react-router-dom';
import { I_TIER_RANK } from '@/types/rank';
import { getTierImage } from '../service';

export const COLUMNS: I_COLUMN[] = [
    {
        display: '순위',
        name: 'rank',
        key: true,
    },
    {
        display: '아이디',
        name: 'githubId',
        render: (d: I_TIER_RANK): React.ReactElement => {
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
    },
    {
        display: '티어',
        name: 'tier',
        render: (d: I_TIER_RANK): React.ReactElement => (
            <>
                <Avatar
                    width={20}
                    height={20}
                    imgUrl={getTierImage(d.tier)}
                    style={{ transform: 'translateY(calc(50% - 5px))' }}
                />
                <span style={{ marginLeft: '5px', cursor: 'inherit' }}>
                    {d.tier}
                </span>
            </>
        ),
    },
    {
        display: '점수',
        name: 'continuousCommit',
    },
];
