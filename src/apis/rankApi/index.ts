import axios from '@/utils/axios';
import { I_API_GET_RANKS_OVERALL, I_API_GET_RANK_RES } from './types';
import { E_LANGUAGE, E_RANK_TYPE } from '@/constants/rank';
import { addQueryStr } from '@/utils/location';
import { getRankType } from './services';

/**
 * 타입별 랭킹을 가져온다.
 * @param param0
 * @returns
 */
export async function getRanks({
    type,
    language,
}: {
    type: E_RANK_TYPE;
    language?: E_LANGUAGE;
    // searchId: string;
}): Promise<I_RANK[]> {
    const url = addQueryStr({ type: getRankType(type, language) }, '/ranks/');
    const { data } = await axios.get<I_API_GET_RANK_RES>(url);

    return data.results.map((rank) => ({
        id: rank.id,
        rank: rank.ranking,
        score: rank.score,
        username: rank.github_user.username,
        githubId: rank.github_user.id,
        profileImageUrl: rank.github_user.avatar_url,
    }));
}

/**
 * 종합랭킹을 가져온다.
 * @param param0
 * @returns
 */
export async function getOverallRanks(): Promise<I_PAGE<I_RANK_USER[]>> {
    const { data } = await axios.get<I_API_GET_RANKS_OVERALL>('/ranks/overall');

    return {
        nextPageCursor: data.next,
        prevPageCursor: data.previous,
        data: data.results.map((rank) => ({
            id: rank.id,
            rank: rank.user_rank,
            tier: rank.tier,
            score: rank.total_score,
            username: rank.name,
            githubId: rank.username,
            profileImageUrl: rank.avatar_url,
        })),
    };
}
