import { E_LANGUAGE, E_RANK_TYPE } from "./type";

export function getRankType(type: E_RANK_TYPE, language?: E_LANGUAGE) {
    let result: string = type;

    if (type === E_RANK_TYPE.LANGUAGE) {
        result = `${E_RANK_TYPE}-${language}`
    }

    return result;
}