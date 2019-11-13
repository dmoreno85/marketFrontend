const INITIAL_STATE = {
    items: [],
    item: {
        // id: 0,
        // model: "",
        // price: 0,
        // display:0.00,
        // rom: 0.0,
        // ram:0.0,
        // core:0,
        // gh: 0,
        // mp:0,
        // color:0,
        // stockUnits: 0,
        // path:"",
        // created_at: Date,
        // update_at: Date,
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