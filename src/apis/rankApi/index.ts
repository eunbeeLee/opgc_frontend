import axios from '@/utils/axios';
import { I_API_GET_RANK_RES } from './types';
import { E_LANGUAGE, E_RANK_TYPE } from '@/constants/rank';
import { addQueryStr } from '@/utils/location';
import { getRankType } from './services';

export async function getRanks({
    type,
    language,
}: {
    type: E_RANK_TYPE;
    language?: E_LANGUAGE;
    // searchId: string;
}): Promise<I_RANK[]> {
    const url = addQueryStr({ type: getRankType(type, language) }, '/ranks/');
    const { data: ranks } = await axios.get<I_API_GET_RANK_RES>(url);

    return ranks.map((rank) => ({
        id: rank.id,
        rank: rank.ranking,
        score: rank.score,
        username: rank.github_user.username,
        githubId: rank.github_user.id,
        profileImageUrl: rank.github_user.avatar_url,
    }));
}
