import { createAction, handleActions } from 'redux-actions'

interface IError {
    requestType: string
    error: Error | null
}
interface IState {
    [requestType: string]: Error | null
}

const initialState: IState = {}
const SET_ERROR = 'error/SET_ERROR'

export const setError = createAction(
    SET_ERROR,
    (payload: IError): IError => payload
)

const error = handleActions(
    {
        [SET_ERROR]: (
            state: IState,
            { payload }: { type: typeof SET_ERROR; payload: IError }
        ) => ({
            ...state,
            [payload.requestType]: payload.error,
        }),
    },
    initialState
)

export default error
