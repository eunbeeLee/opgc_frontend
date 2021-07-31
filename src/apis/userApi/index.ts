import axios from '@/utils/axios';
import { parseUser, parseUserList } from './services';
import {I_API_GET_USER_RES, I_API_GET_USER_LIST_RES} from './types';

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

export async function getUserList(
    params: {page_size: number, cursor: string | null, company: string | null, username: string | null}
): Promise<I_PAGE<I_LIST_USER[]>> {
    const { data } = await axios.get<I_API_GET_USER_LIST_RES>(
        `/githubs/users/`, {params: params}
    );

    return parseUserList(data);
}