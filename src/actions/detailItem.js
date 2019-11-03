import axios from 'axios';

const APIKEY = '323112ea2281b9eb70f319f4df422c6b';

export const detailItem = (id) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-ES`)
        .then(res => {

            console.log(res.data);
            dispatch({
                type: 'DETAIL_ITEMS',
                payload: {
                    id: res.data.id,
                    title: res.data.title,
                    price: res.data.price,
                    image: res.data.image,
                }
            })


        })
        .catch(error => {
            console.log('Error: ${error}')
        })
}