import { User } from '@/constants/user';
import axios from '@/libs/axios';

export async function getUser(username: string): Promise<User> {
    const { data } = await axios.get<I_API_USER>(`/githubs/users/${username}/`);

    return new User(data);
}

export async function patchUser(username: string): Promise<User> {
    const { data } = await axios.patch<I_API_USER>(`/githubs/users/${username}/`);

    return new User(data);
}