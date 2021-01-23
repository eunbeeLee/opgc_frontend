import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '@/modules/loading';

/**
 * api request를 처리하는 saga를 리턴한다.
 * @param type 
 * @param request 
 */
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

/**
 * API(or 비동기연산)에 필요한 ACTION TYPE들을 (type, success, failure ) return 한다.
 * @param type 
 */
export function createRequestActionTypes (type: string): string[] {
    const success = `${type}_SUCCESS`;
    const failure = `${type}_FAILURE`;

    return [type, success, failure];
}