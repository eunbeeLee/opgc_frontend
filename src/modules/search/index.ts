/**
 * 검색창과 관련된 store
 * 최근검색, 즐겨찾기와 관련된 정보를 관리
 * 데이터는 한 화면에서 뿌릴지 몰라도 데이터의 추가삭제가 다양한 페이지에서 일어남에 따라 생성했다.
 */
import { handleActions, createAction } from 'redux-actions';
import { FAVORITES_KEY, HISTORIES_KEY } from './constants';
import { getList } from './services';
/**
 * interface
 */
interface I_STATE {
    favorites: string[];
    histories: string[];
}

/**
 * actions
 */
export const GET_HISTORIES = 'app/GET_HISTORIES';
export const GET_FAVORITES = 'app/GET_FAVORITES';
export const ADD_HISTORY = 'app/ADD_HISTORY';
export const ADD_FAVORITE = 'app/ADD_FAVORITE';
export const REMOVE_HISTORY = 'app/REMOVE_HISTORY';
export const REMOVE_FAVORITE = 'app/REMOVE_FAVORITE';

/**
 * functions for creating actions
 */
export const actions = {
    getHistories: createAction(GET_HISTORIES),
    getFavorites: createAction(GET_FAVORITES),
    addHistory: createAction(ADD_HISTORY, (item: string) => item),
    addFavorite: createAction(ADD_FAVORITE, (item: string) => item),
    removeHistory: createAction(REMOVE_HISTORY, (item: string) => item),
    removeFavorite: createAction(REMOVE_FAVORITE, (item: string) => item),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    favorites: [],
    histories: [],
};

/**
 * reducer
 */
const search = handleActions(
    {
        [GET_HISTORIES]: (state: I_STATE): I_STATE => ({
            ...state,
            histories: getList(HISTORIES_KEY),
        }),
        [GET_FAVORITES]: (state: I_STATE): I_STATE => ({
            ...state,
            favorites: getList(FAVORITES_KEY),
        }),
        [ADD_HISTORY]: (
            state: I_STATE,
            { payload }: { payload: string }
        ): I_STATE => {
            const histories = [...state.histories];

            if (payload && !histories.includes(payload)) {
                histories.push(payload);
            }

            localStorage.setItem(HISTORIES_KEY, JSON.stringify(histories));

            return {
                ...state,
                histories,
            };
        },
        [ADD_FAVORITE]: (
            state: I_STATE,
            { payload }: { payload: string }
        ): I_STATE => {
            const favorites = [...state.favorites];

            if (payload && !favorites.includes(payload)) {
                favorites.push(payload);
            }

            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

            return {
                ...state,
                favorites,
            };
        },
        [REMOVE_HISTORY]: (
            state: I_STATE,
            { payload }: { payload: string }
        ): I_STATE => {
            const histories = state.histories.filter(
                (item) => item !== payload
            );

            localStorage.setItem(HISTORIES_KEY, JSON.stringify(histories));

            return {
                ...state,
                histories,
            };
        },
        [REMOVE_FAVORITE]: (
            state: I_STATE,
            { payload }: { payload: string }
        ): I_STATE => {
            const favorites = state.favorites.filter(
                (item) => item !== payload
            );

            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

            return {
                ...state,
                favorites,
            };
        },
    },
    initialState
);

export default search;
