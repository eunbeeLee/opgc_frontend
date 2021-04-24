import { handleActions, createAction } from 'redux-actions';
/**
 * interface
 */
interface I_STATE {
    recommand: boolean;
}

/**
 * actions
 */
export const SET_RECOMMAND = 'ui/SET_RECOMMAND';

/**
 * functions for creating actions
 */
export const actions = {
    setRecommand: createAction(
        SET_RECOMMAND,
        (value: boolean): boolean => value
    ),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    recommand: false,
};

/**
 * reducer
 */
const mainPage = handleActions(
    {
        [SET_RECOMMAND]: (
            state: I_STATE,
            { payload }: { payload: boolean }
        ): I_STATE => ({
            ...state,
            recommand: payload,
        }),
    },
    initialState
);

export default mainPage;
