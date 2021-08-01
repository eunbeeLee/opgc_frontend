import React, { useCallback, useEffect, useState } from 'react';
import './style.css';

interface I_PROPS {
    onChangeTier?: (tier: string) => any;
    onChangeCompany?: (company: string) => any;
    onChangeUserName?: (userName: string) => any;
    onApplyFilter?: (data: {
        tier: string;
        company: string;
        userName: string;
    }) => any;
}

const UserFilter: React.FC<I_PROPS> = ({
    onChangeTier = () => {},
    onChangeCompany = () => {},
    onChangeUserName = () => {},
    onApplyFilter = () => {},
}) => {
    const [company, setCompany] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [tier, setTier] = useState<string>('');

    useEffect(() => {
        onChangeCompany(company);
    }, [company]);

    useEffect(() => {
        onChangeUserName(userName);
    }, [userName]);

    useEffect(() => {
        onChangeTier(tier);
    }, [tier]);

    const handleClickApply = useCallback(() => {
        onApplyFilter({
            company,
            userName,
            tier,
        });
    }, [company, userName, tier]);

    return (
        <div className="c-filter">
            <select
                onChange={({ target: { value } }) => {
                    setTier(value);
                }}
            >
                <option value="" disabled selected>
                    티어
                </option>
                <option value="35">Challenger</option>
                <option value="30">Master</option>
                <option value="25">Diamond</option>
                <option value="20">Platinum</option>
                <option value="15">Gold</option>
                <option value="10">Silver</option>
                <option value="5">Bronze</option>
                <option value="0">UnRank</option>
                <option value="">All</option>
            </select>
            <input
                placeholder="회사"
                onChange={({ target: { value } }) => {
                    setCompany(value);
                }}
            />
            <input
                placeholder="깃헙 아이디"
                onChange={({ target: { value } }) => {
                    setUserName(value);
                }}
            />
            <button className="c-filter-btn" onClick={handleClickApply}>
                필터 적용
            </button>
        </div>
    );
};

export default React.memo(UserFilter);
