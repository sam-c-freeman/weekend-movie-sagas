import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
        <Box>
            <h1>MovieList</h1>
            {/* <section className="movies"> */}
            <Paper elevation={7} color="secondary">
            <Grid container spacing={2}>
                {movies.map(movie => (
                        <Grid key={movie.id} item xs={12} sm={4} md={3}>
                        {/* <Card key={movie.id}> */}
                            <Item  sx={{ Width: 100, Height: 100}}>
                                <div >
                                    <h3>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title} onClick={() => handleDetailsClick(movie.id)}/>
                                </div>
                        {/* </Card> */}
                            </Item> 
                        </Grid>
                ))}
                </Grid>
            </Paper>
            {/* </section> */}
        </Box>

    );
}

export default MovieList;