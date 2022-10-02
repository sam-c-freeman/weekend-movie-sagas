import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies)
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchOneMovie);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchOneMovie(action) {
    // get one movie from the DB
    const movieId = action.payload;
    try {
        const movie = yield axios.get(`/api/movie/${movieId}`);
        yield put({ type: 'SET_ONE_MOVIE', payload: movie.data });

    } catch {
        console.log('get one Movie error');
    }
        
}

function* addMovie(action) {
    // add Movie to DB
    const newMovie = action.payload;
    console.log(newMovie);
    try {
        const movie = yield axios.post(`/api/movie/`, newMovie);
        yield put({ type: 'FETCH_MOVIES', payload: movie.data });

    } catch {
        console.log('create movie error');
    }
        
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return[...state, action.payload];
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const oneMovie = (state = {}, action) =>{
    switch(action.type){
        case 'SET_ONE_MOVIE':
        return action.payload;
        case 'CLEAR_MOVIE_DETAILS':
        return {}
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        oneMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
