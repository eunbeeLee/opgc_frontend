import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '@/modules/loading';

export function createRequestSaga (type: string, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action: { type: string, payload: any }) {
        yield put(startLoading(type));

        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data
            })
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        } finally {
            yield put(finishLoading(type));
        }
    }
}