import { E_TIER, TierInfo, User } from '@/constants/user';
import axios from '@/utils/axios';

export async function getUser(username: string): Promise<User> {
    const { data } = await axios.get<I_API_USER>(`/githubs/users/${username}/`);

    return new User(data);
}

export async function patchUser(username: string): Promise<User> {
    const { data } = await axios.patch<I_API_USER>(
        `/githubs/users/${username}/`
    );

    return new User(data);
}

export async function getUsersTier({
    tier,
    cursor,
    pageSize,
}: {
    tier: E_TIER;
    cursor?: string;
    pageSize?: number;
}): Promise<I_API_TIERS> {
    const { data } = await axios.get<I_API_TIERS>('/githubs/tier/', {
        params: {
            tier,
            cursor,
            pageSize,
        },
    });

    return data;
}
