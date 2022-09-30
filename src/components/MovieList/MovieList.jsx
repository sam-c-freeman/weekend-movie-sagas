import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            <Grid container spacing={2}>
                {movies.map(movie => {
                    return (
                        <Card>
                            
                                <div key={movie.id} >
                                    <h3>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title}/>
                                </div>
                        </Card>
                    );
                })}
            </Grid>
            </section>
        </main>

    );
}

export default MovieList;