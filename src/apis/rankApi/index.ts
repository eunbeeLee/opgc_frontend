import axios from '@/libs/axios';
import { E_RANK_TYPE, E_LANGUAGE, I_RANK as I_API_RANK } from './types';
import { addQueryStr } from '@/libs/location';
import { getRankType } from './services';
import { I_RANK } from '@/types/rank';

export async function getRanks({
    type,
    language,
}: {
    type: E_RANK_TYPE;
    language?: E_LANGUAGE;
    // searchId: string;
}): Promise<I_RANK[]> {
    const url = addQueryStr({ type: getRankType(type, language) }, '/ranks/');
    const { data: ranks } = await axios.get<I_API_RANK[]>(url);

    return ranks.map((rank) => ({
        id: rank.id,
        rank: rank.ranking,
        score: rank.score,
        username: rank.github_user.username,
        githubId: rank.github_user.id,
        profileImageUrl: rank.github_user.avatar_url,
    }));
}
