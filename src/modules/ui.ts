import { handleActions, createAction } from 'redux-actions';
/**
 * interface
 */
interface I_STATE {
    loading: boolean;
}

/**
 * actions
 */
export const SET_LOADING = 'app/SET_LOADING';

/**
 * functions for creating actions
 */
export const setLoading = createAction(
    SET_LOADING,
    (value: boolean): boolean => value
);

/**
 * initial state
 */
const initialState: I_STATE = {
    loading: false,
};

/**
 * reducer
 */
const ui = handleActions(
    {
        [SET_LOADING]: (
            state: I_STATE,
            { payload }: { payload: boolean }
        ): I_STATE => ({
            ...state,
            loading: payload,
        }),
    },
    initialState
);

export default ui;
