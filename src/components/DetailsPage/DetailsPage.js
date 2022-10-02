import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import '../App/App.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';


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
        
        return () => {
            dispatch({
              type: 'CLEAR_MOVIE_DETAILS'
            })
          }
        }, [movieId])


    
    const backToHome = () =>{
        history.push('/')
  }
    


    return(
        <>
        <Box mb={2}>
          <Box sx={{
            border: 2 , 
            borderColor: "#00fff2",
            borderRadius: 1, 
            maxWidth:700, 
            margin:"0 auto"}}>
                <Card style={{maxWidth:700,  padding:"20px 20px"}}>
                    <CardContent>
                      <Typography variant="h2" gutterBottom>
                            {movie.title}
                        </Typography>
                            <img src={movie.poster}></img>
                        <Typography variant="body1" gutterBottom mt={5}>
                                {movie.description}
                        </Typography>
                        <Typography variant="h4" gutterBottom mt={5}>
                                Genre:
                        </Typography>

                    
                                {movie.genres ? (
                        <div>
                        {movie.genres.map((genre, index) => {
                            return (
                            <Typography variant="body1" key={index} mt={2}>
                                {genre}
                            </Typography>
                            );
                        })}
                        </div>
                    ) : (
                        <span></span>
                    )}
                        {/* <Typography variant="body1">
                                 {movie.genres}
                        </Typography> */}
                        <Button onClick={backToHome}
                        // color="error" 
                        sx={{mt: 4, color: '#026f6a', borderColor: '#026f6a'}}
                        variant="outlined" 
                        startIcon={<HomeIcon />}>Home</Button>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </>
    )
}

export default DetailsPage;