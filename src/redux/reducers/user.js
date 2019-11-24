const INITIAL_STATE = {
    login: "",
    userEmail: {}
}

export const userToken = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: action.payload
            }
            case 'USER_AUTH':
                return {
                    ...state,
                    login: action.payload
                }
                case 'GET_USER':
                    return {
                        ...state,
                        userEmail: action.payload
                    }
                    default:
                        return state;
    }
}