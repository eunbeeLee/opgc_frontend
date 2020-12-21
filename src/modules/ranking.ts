const GET_RANKING = 'ranking/GET_RANKING';

export const getUser = () => ({ type: GET_RANKING });

const initialState = [];

function ranking (state = initialState, action) {
    switch (action.type) {
        case GET_RANKING: 
            return [
                { name: 'ginameee' },
                { name: 'jayji' },
            ]
        default:
            return state;
    }
}

export default ranking;