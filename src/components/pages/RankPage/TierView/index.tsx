import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import Table from '@/components/common/Table';
import { COLUMNS } from './constants';
import { GET_RANKS } from '@/modules/rank/tier';

interface I_PROPS {}

const TierView: React.FC<I_PROPS> = () => {
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
            <div className="ranking__header">
                <p className="ranking__help-text">
                    {/* OPGC에 총 {totalUsersCnt}명의 개발자가 있습니다. */}
                    가장 개발을 열심히한 TOP 10 개발자 분들입니다!
                    <br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
            </div>
            <div className="ranking__content">
                <ul>
                    {top5Ranks.map((tierInfo) => (
                        <li>{JSON.stringify(tierInfo)}</li>
                    ))}
                </ul>
                <Table columns={COLUMNS} data={leftRanks} />
            </div>
        </>
    );
};

export default React.memo(TierView);
