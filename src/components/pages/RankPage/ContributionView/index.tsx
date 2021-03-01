import React, { useEffect } from 'react';
import RankTable from '../RankTable';
import { useDispatch, useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import Table from '@/components/common/Table';
import { CONTRI_COLUMNS } from './constants';

interface I_PROPS {}

const ContributionView: React.FC<I_PROPS> = () => {
    const action = actions.rank.contribution;
    const dispatch = useDispatch();
    const { root: { searchId }, contribution: { totalUsersCnt, ranks } } = useSelector((state: T_ROOT_REDUCER) => state.rank);

    useEffect(() => {
        dispatch(action.getRanks(searchId));
    }, [])
    
    return (
        <>
            <div className="ranking__header">
                <p className="ranking__help-text">
                    OPGC에 총 {totalUsersCnt}명의 개발자가 있습니다.
                    <br />
                    <span>랭킹은 주기적으로 갱신됩니다.</span>
                </p>
            </div>
            <div className="ranking__content">
                <Table columns={CONTRI_COLUMNS} data={ranks}/>
            </div>
        </>
    )
}

export default React.memo(ContributionView);