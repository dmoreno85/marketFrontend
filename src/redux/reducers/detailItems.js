const INITIAL_STATE = {
    items: [],
}

const detailItems= (state = INITIAL_STATE, action )=>{
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

export default detailItems;