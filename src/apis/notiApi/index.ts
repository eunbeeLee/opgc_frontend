import { I_NOTI } from '@/types/noti';
import axios from '@/utils/axios';
import { I_API_GET_NOTIS_RES } from './types';
import { format } from 'date-fns';

export async function getNotis(): Promise<I_PAGE<I_NOTI[]>> {
    const { data } = await axios.get<I_API_GET_NOTIS_RES>('/notices');

    const results = {
        nextPageCursor: data.next,
        prevPageCursor: data.previous,
        data: data.results.map((noti) => ({
            ...noti,
            date: format(new Date(noti.created), 'yyyy-MM-dd'),
        })),
    };

    return results;
}
