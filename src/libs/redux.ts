import { call, put } from 'redux-saga/effects';
import { actions as loadingActions } from '@/modules/loading';
import { actions as errorActions } from '@/modules/error';

/**
 * api request를 처리하는 saga를 리턴한다.
 * @param actionNm
 * @param asyncFn
 */
export function createRequestSaga(
    actionNm: string,
    asyncFn: (params: any) => Promise<any>
): (action: { type: string; payload: any }) => Generator {
    const { startLoading, finishLoading } = loadingActions;
    const { setError } = errorActions;

    const SUCCESS = `${actionNm}_SUCCESS`;
    const FAILURE = `${actionNm}_FAILURE`;

    return function* (action: { type; payload }) {
        yield put(startLoading(actionNm));
        try {
            const data: any = yield call(asyncFn, action.payload);
            yield put(setError(actionNm, null));
            yield put({
                type: SUCCESS,
                payload: data,
            });
        } catch (e) {
            console.error(e);
            yield put(setError(actionNm, e));
            yield put({
                type: FAILURE,
            });
        } finally {
            yield put(finishLoading(actionNm));
        }
    };
}

/**
 * API(or 비동기연산)에 필요한 ACTION TYPE들을 (type, success, failure) return 한다.
 * @param type
 */
export function createRequestActionTypes(type: string): string[] {
    const success = `${type}_SUCCESS`;
    const failure = `${type}_FAILURE`;

    return [type, success, failure];
}
