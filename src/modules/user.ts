const GET_USER = 'user/GET_USER';

export const getUser = () => ({ type: GET_USER });

const initialState = null;

function user (state = initialState, action) {
    switch (action.type) {
        case GET_USER: 
            return {
                name: 'ginameee'
            }
        default:
            return state;
    }
}

export default user;