const INITIAL_STATE = {
    items: [],
    item: {},
    carrito: [],
}

export const item = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_ITEM':
            return {
                ...state,
                items: action.payload
            }
            case 'DETAIL_ITEMS':
                return {
                    ...state,
                    item: action.payload,
                }
                case 'ADD_ITEM':
                    return {
                        ...state,
                        carrito: [
                            ...state.carrito,
                            action.payload,
                        ]
                    }
                    case 'GET_ITEM':
                        return{
                            ...state, 
                        }

                    default:
                        return state;
    }
}