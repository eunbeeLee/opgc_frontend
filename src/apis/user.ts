import axios from '@/libs/axios'

export function getUser(username: string): Promise<I_USER> {
    return axios.get(`/githubs/users/${username}/`)
}
