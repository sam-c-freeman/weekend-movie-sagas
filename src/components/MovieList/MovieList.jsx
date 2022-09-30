import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

function MovieList() {
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
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card key={movie.id}>
                            <div >
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} onClick={() => handleDetailsClick(movie.id)}/>
                            </div>
                        </Card>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;