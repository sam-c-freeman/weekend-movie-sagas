import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



function MovieList() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleDetailsClick = (id) => {
        history.push(`/${id}`)
    }

    return (
        <Box className="movieList">
            {/* <h1 className="movieHeader">Featured Films</h1> */}
  
            <Grid container spacing={2}>
                {movies.map(movie => (
                        <Grid key={movie.id} item xs={12} sm={4} md={3}>
                       
                            <Item  sx={{ Width: 100, Height: 100}}>
                                <div >
                                    <h3>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title} onClick={() => handleDetailsClick(movie.id)}/>
                                </div>
                 
                            </Item> 
                        </Grid>
                ))}
                </Grid>
           
        </Box>

    );
}

export default MovieList;