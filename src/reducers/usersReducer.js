import { GET_ALL_USERS } from '../actions/types';

const initialState = {
    users: [],
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, users: action.payload.users};
        default:
            return state;
    }
};