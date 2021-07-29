import { E_TIER } from '@/constants/user';
import axios from '@/utils/axios';
import { parseUser, parseUserList } from './services';
import {I_API_GET_USERS_TIER_RES, I_API_GET_USER_RES, I_API_GET_USER_LIST_RES} from './types';

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

export async function getUserList(): Promise<{ prevPageCursor: string; nextPageCursor: string; results: I_LIST_USER[] }> {
    const { data } = await axios.get<I_API_GET_USER_LIST_RES>(
        `/githubs/users/`
    );

    return parseUserList(data);
}