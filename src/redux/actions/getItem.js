import axios from 'axios';

// const BASE_URL ='https://api.themoviedb.org/3/movie/&top_rated&language=es-ES&page=${page}'
const APIKEY = '323112ea2281b9eb70f319f4df422c6b';
// prueba con API MOVIE
 const getItem = (tag) => (dispatch)=>{
    axios.get(`http://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=es-ES&page=1`)
    .then(res =>{
        console.log(res.data.results);
        dispatch({
            type:'ALL_ITEM',
            payload:res.data.results
        })
        
    })

    .catch(error => {console.log('Error : ${error}')}
    )
}

export default getItem; 

