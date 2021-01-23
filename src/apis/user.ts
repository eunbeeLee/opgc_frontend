import axios from '@/libs/axios'

export function getUser (username: string): Promise<IUser> {
  return axios.get(`/githubs/users/${username}/`);
}