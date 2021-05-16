import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import Table from '@/components/common/Table';
import { CONTRI_COLUMNS } from './constants';
import { GET_RANKS } from '@/modules/rank/follwings';

interface I_PROPS {}

const FollowingsView: React.FC<I_PROPS> = () => {
    const { getRanks } = actions.rank.followings;
    const { setLoading } = actions.ui.app;

    const dispatch = useDispatch();
    const { rank: rankState, loading: loadingState } = useSelector(
        (state: T_ROOT_REDUCER) => state
    );
    const {
        root: { searchId },
        followings: { totalUsersCnt, ranks },
    } = rankState;

    useEffect(() => {
        dispatch(getRanks(searchId));
    }, []);

    useEffect(() => {
        dispatch(setLoading(loadingState[GET_RANKS]));
    }, [loadingState[GET_RANKS]]);

    return (
        <>
            <div className="ranking__header">
                <p className="ranking__help-text">
                    {/* OPGC에 총 {totalUsersCnt}명의 개발자가 있습니다. */}
                    팔로잉 수를 기준으로한 TOP 10 랭킹입니다.
                    <br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
            </div>
            <div className="ranking__content">
                <Table columns={CONTRI_COLUMNS} data={ranks} />
            </div>
        </>
    );
};

export default React.memo(FollowingsView);
