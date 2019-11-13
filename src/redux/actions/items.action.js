import axios from 'axios';


export const getItem = (tag) => (dispatch) => {

    axios.get(`http://localhost:8080/api/v1/items`)
        .then(res => {
            // console.log(res.data);
            dispatch({
                type: 'ALL_ITEM',
                payload: res.data,
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export  const  detailItem = (id) => 
    
    
     (dispatch) => {
    // console.log('entrando en detalles' + id);
    //  var ID =id
    axios.get(`http://localhost:8080/api/v1/items/${id}`) 
        .then(res => {

            // console.log('HOLAAAA DETALLES DENTROOOOO'+ JSON.stringify(res.data));
          
            dispatch({
                type: 'DETAIL_ITEMS',
                payload: {

                    id: res.data.id,
                    model: res.data.model,
                    price: res.data.price,
                    display:res.data.display,
                    rom: res.data.rom,
                    ram: res.data.ram,
                    core:res.data.core,
                    gh:res.data.gh,
                    mp:res.data.mp,
                    color: res.data.color,
                    path: res.data.path,
                    stockUnits: res.data.stockUnits,
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}