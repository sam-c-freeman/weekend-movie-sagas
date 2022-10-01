import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
            {/* <Box sx={{ mx: "auto" }}> */}
                <Card style={{maxWidth:650, margin:"0 auto", padding:"20px 5px"}}>
                    <CardContent>
                        <Typography sx={{fontSize:18}}>
                            <h2>{movie.title}</h2>
                            <img src={movie.poster}></img>
                            <p>{movie.description}</p>
                            <p>Genre: {movie.genres}</p>
                        </Typography>
                    </CardContent>
                </Card>
            {/* </Box> */}
        </>
    )
}

export default DetailsPage;