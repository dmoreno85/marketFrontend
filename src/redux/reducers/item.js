const INITIAL_STATE = {
    id: 0,
    title: "",
    poster_path:"",
    price: 0,
    image: ""
}

const item = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_ITEM':
            return {
                ...state,
                items:action.payload
            }
            default:
                return state;
    }
}


export default item;