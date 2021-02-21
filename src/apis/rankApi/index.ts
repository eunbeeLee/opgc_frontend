import axios from '@/libs/axios';
import { T_RANKS, E_RANK_TYPE, E_LANGUAGE } from './type'
import { addQueryStr } from '@/libs/location'
import { getRankType } from './services';

export function getRanks(type: E_RANK_TYPE, language?: E_LANGUAGE): Promise<T_RANKS> {
    const url = addQueryStr({ type: getRankType(type, language)}, '/githubs/ranks/') ;
    return axios.get(url);
}