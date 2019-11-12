const INITIAL_STATE = {
    items: [],
    item: {
        id: 0,
        model: "",
        price: 0,
        color: "",
        stockUnits: 0,
        created_at: Date,
        update_at: Date,
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