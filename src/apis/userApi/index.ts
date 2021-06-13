import { E_TIER } from '@/constants/user';
import axios from '@/utils/axios';
import { parseUser } from './services';
import { I_API_GET_USERS_TIER_RES, I_API_GET_USER_RES } from './types';

export async function getUser(username: string): Promise<I_USER> {
    const { data } = await axios.get<I_API_GET_USER_RES>(
        `/githubs/users/${username}/`
    );

    return parseUser(data);
}

export async function patchUser(username: string): Promise<I_USER> {
    const { data } = await axios.patch<I_API_GET_USER_RES>(
        `/githubs/users/${username}/`
    );

    return parseUser(data);
}

export async function getUsersTier({
    tier,
    cursor,
    pageSize,
}: {
    tier: E_TIER;
    cursor?: string;
    pageSize?: number;
}): Promise<I_PAGE<I_TIER[]>> {
    const { data } = await axios.get<I_API_GET_USERS_TIER_RES>(
        '/githubs/tier/',
        {
            params: {
                tier,
                cursor,
                pageSize,
            },
        }
    );

    return {
        nextPageCursor: data.next,
        prevPageCursor: data.previous,
        data: data.results.map((t, idx) => ({
            id: t.id,
            rank: idx,
            username: t.username,
            name: t.name,
            profileImgUrl: t.avatar_url,
            tier: t.tier,
            company: t.company,
            desc: t.bio,
            continuousCommitDay: t.continuous_commit_day,
        })),
    };
}
