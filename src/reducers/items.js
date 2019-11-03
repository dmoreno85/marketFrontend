const INITIAL_STATE = {
    items: [],
}

const items = (state = INITIAL_STATE, action )=>{
    switch(action.type){
        case 'DETAIL_ITEMS':
            return{
                ...state,
                items:action.payload.items,
            }
            default:
                return state;
    }
}

export default items;