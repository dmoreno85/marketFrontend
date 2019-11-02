const INITIAL_STATE = {
    id: 0,
    title: "",
    price: 0,
    image: ""
}

const item = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_ITEM':
            return {
                ...state,
                id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    image: action.payload.image
            }
            default:
                return state;
    }
}


export default item;