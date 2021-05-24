import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import Table from '@/components/common/Table';
import { COLUMNS } from '@/components/pages/RankPage/TierView/constants';
import { GET_RANKS } from '@/modules/rank/followers';
import './style.css';

const Ranking: React.FC = () => {
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
                    OPGC에서 가장 개발에 열정적인 TOP 5 개발자분들입니다!
                    <br />
                    <span>
                        <Link to="/rank/tier">"순위"</Link> 탭에서 더 다양한
                        순위를 확인하세요.
                    </span>
                </p>
            </div>
            <div className="ranking__content">
                <Table columns={COLUMNS} data={top5Ranks} />
            </div>
        </>
    );
};

export default React.memo(Ranking);
