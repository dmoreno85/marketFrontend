const INITIAL_STATE = {
    items: [],
    item: {

    }
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

                default:
                    return state;
    }
}