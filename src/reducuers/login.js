import { LOGIN } from '../actions/types'

const defaultState = {
    userCode: null,
    userName: null,
    password: null
}

function login(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            let { userName, password } = action.data;
            return { ...state, userName: userName, password: password };
            break;
        default:
            return state;
            break;
    }
}

module.exports = { login };