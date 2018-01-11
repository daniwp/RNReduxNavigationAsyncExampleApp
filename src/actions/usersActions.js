import { GET_ALL_USERS } from './types';

export const getAllUsers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: { users }
                })
            })
    }
}