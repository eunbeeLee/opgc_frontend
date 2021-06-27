import { handleActions, createAction } from 'redux-actions';
/**
 * interface
 */
interface I_STATE {
    loading: boolean;
    nav: boolean;
    errorModal: Error | null;
}

/**
 * actions
 */
export const SET_LOADING = 'ui/SET_LOADING';
export const SET_ERROR_MODAL = 'ui/SET_ERROR_MODAL';
export const SET_MOBILE_NAV = 'ui/SET_MOBILE_NAV';

/**
 * functions for creating actions
 */
export const actions = {
    setLoading: createAction(SET_LOADING, (value: boolean) => value),
    setErrorModal: createAction(
        SET_ERROR_MODAL,
        (value: Error | null) => value
    ),
    setMobileNav: createAction(SET_MOBILE_NAV, (value: boolean) => value),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    loading: false,
    nav: false,
    errorModal: null,
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
        [SET_ERROR_MODAL]: (
            state: I_STATE,
            { payload }: { payload: any }
        ): I_STATE => ({
            ...state,
            errorModal: payload,
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
