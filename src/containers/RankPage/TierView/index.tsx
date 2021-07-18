import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import Table from '@/components/Table';
import { COLUMNS } from './constants';
import { GET_RANKS } from '@/modules/rank/tier';
import HighRankUserCard from '../HighRankUserCard';
import './style.css';

const TierView: React.FC = () => {
    const { getRanks } = actions.rank.tier;
    const { setLoading } = actions.ui.app;

    const dispatch = useDispatch();
    const { rank: rankState, loading: loadingState } = useSelector(
        (state: T_ROOT_REDUCER) => state
    );
    const {
        tier: { ranks },
    } = rankState;

    const top5Ranks = useMemo(() => ranks.slice(0, 5), [ranks]);
    const leftRanks = useMemo(() => ranks.slice(5), [ranks]);

    useEffect(() => {
        dispatch(getRanks());
    }, []);

    useEffect(() => {
        dispatch(setLoading(loadingState[GET_RANKS]));
    }, [loadingState[GET_RANKS]]);

    return (
        <>
            <div className="ranking__header pc-only">
                <p className="ranking__help-text">
                    개발에 열정적인 TOP 10 개발자 분들입니다!
                    <br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
            </div>
            <div className="ranking__content tier-view">
                {ranks.length > 0 && (
                    <>
                        <div className="tier-view__highest-users">
                            <HighRankUserCard
                                id={top5Ranks[0].username}
                                name={top5Ranks[0].name}
                                tier={top5Ranks[0].tier}
                                rank={top5Ranks[0].rank}
                                point={top5Ranks[0].continuousCommitDay}
                                profileImgUrl={top5Ranks[0].profileImgUrl}
                            />
                            <ul>
                                {top5Ranks.slice(1, 5).map((tierInfo) => (
                                    <li key={tierInfo.username}>
                                        <HighRankUserCard
                                            id={tierInfo.username}
                                            name={tierInfo.name}
                                            tier={tierInfo.tier}
                                            rank={tierInfo.rank}
                                            point={tierInfo.continuousCommitDay}
                                            profileImgUrl={
                                                tierInfo.profileImgUrl
                                            }
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Table columns={COLUMNS} data={leftRanks} />
                    </>
                )}
            </div>
        </>
    );
};

export default React.memo(TierView);
