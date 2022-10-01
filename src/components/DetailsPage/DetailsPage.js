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
    }, [movieId])
    
    const backToHome = () =>{
        history.push('/')
  }
    

  //why is button in header?
    return(
        <>
        {/* <Button 
        onClick={backToHome}
        sx={{mb: 2}}
        color="error" variant="outlined" startIcon={<HomeIcon />}>
            Home
        </Button> */}
            {/* <button onClick={backToHome}>Home</button> */}
            {/* <Box sx={{ mx: "auto" }}> */}
                <Card style={{maxWidth:750, margin:"0 auto", padding:"20px 20px"}}>
                    <CardContent>
                      <Typography variant="h2" gutterBottom>
                            {movie.title}
                        </Typography>
                            <img src={movie.poster}></img>
                        <Typography variant="body1" gutterBottom mt={5}>
                                {movie.description}
                        </Typography>
                        <Typography variant="h5" gutterBottom mt={5}>
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
                        color="error" 
                        sx={{m: 4}}
                        variant="outlined" 
                        startIcon={<HomeIcon />}>Home</Button>
                    </CardContent>
                </Card>
            {/* </Box> */}
        </>
    )
}

export default DetailsPage;