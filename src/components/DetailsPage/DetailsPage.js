import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';


function DetailsPage (){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const movieId = params.id
    const movie = useSelector(store => store.oneMovie)
    
    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieId
        })
    }, [movieId])
    
    const backToHome = () =>{
        history.push('/')
  }
    

  //why is button in header?
    return(
        <>
            <button onClick={backToHome}>Home</button>
      
            <Card>
                <p>{movie.title}</p>
                <img src={movie.poster}></img>
                <p>{movie.description}</p>
                <p>{movie.genres}</p>
            </Card>
        </>
    )
}

export default DetailsPage;