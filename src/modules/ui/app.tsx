import { handleActions, createAction } from 'redux-actions';
/**
 * interface
 */
interface I_STATE {
    loading: boolean;
    nav: boolean;
}

/**
 * actions
 */
export const SET_LOADING = 'ui/SET_LOADING';
export const SET_MOBILE_NAV = 'ui/SET_MOBILE_NAV';

/**
 * functions for creating actions
 */
export const actions = {
    setLoading: createAction(SET_LOADING, (value: boolean): boolean => value),
    setMobileNav: createAction(
        SET_MOBILE_NAV,
        (value: boolean): boolean => value
    ),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    loading: false,
    nav: false,
};

/**
 * reducer
 */
const app = handleActions(
    {
        [SET_LOADING]: (
            state: I_STATE,
            { payload }: { payload: boolean }
        ): I_STATE => ({
            ...state,
            loading: payload,
        }),
        [SET_MOBILE_NAV]: (
            state: I_STATE,
            { payload }: { payload: boolean }
        ): I_STATE => ({
            ...state,
            nav: payload,
        }),
    },
    initialState
);

export default app;
