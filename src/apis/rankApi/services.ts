import { E_LANGUAGE, E_RANK_TYPE } from '@/constants/rank';

const getRankType = (type: E_RANK_TYPE, language?: E_LANGUAGE): string => {
    let result: string = type;

    if (type === E_RANK_TYPE.LANGUAGE) {
        result = `${E_RANK_TYPE}-${language}`;
    }

    return result;
};

export { getRankType };
