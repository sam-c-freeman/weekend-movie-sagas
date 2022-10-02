import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Form.css';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function Form (){
    const dispatch = useDispatch();
    let [newMovie, setMovie] = useState({title: '', poster: '', description:'', genre:''});
    
    const history = useHistory();
    
    const backToHome = () =>{
        history.push('/')
  }

    const handleChange = (movieKey) => (event) => {
        console.log('creating new Movie', newMovie);
        setMovie({...newMovie, [movieKey]: event.target.value})
    }

    const addNewMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        setMovie({title: '', poster: '', description: '', genre: ''});
    }

    const checkEmpty = (event) => {
        if(newMovie.tite === '' || newMovie.poster === '' || newMovie.description === '' || newMovie.genre === ''){
            alert('Please enter all values!')
        }
        else{
            addNewMovie(event);
        }
    }
    
    return(
    <Box mb={2}>
    <Box  className="form" sx={{  
                            border: 2 , 
                            borderColor: "#00fff2",
                            borderRadius: 1, 
                            maxWidth:600, 
                            margin:"0 auto",
                             }}>
        
        <Typography variant="h4" gutterBottom mt={2} className="formTitle">
                                Add a Movie
        </Typography>
        <form>
            <Stack spacing={2} m={2}>
           
                <TextField
                    type="text"
                    value={newMovie.title}
                    onChange={handleChange('title')}
                    id="outlined-helperText"
                    placeholder="Movie Title"
                />
                <TextField
                    type="text"
                    value={newMovie.poster}
                    onChange={handleChange('poster')}
                    id="outlined-helperText"
                    placeholder="Movie Poster URL"
                />
                <TextField
                    type="text"
                    value={newMovie.description}
                    onChange={handleChange('description')}
                    id="outlined-helperText"
                    multiline
                    rows={3}
                    placeholder="Description"
                />
                <Select
                    id="demo-simple-select"
                    value={newMovie.genre}
                    onChange={handleChange('genre')}
        >
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space-Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>
                </Select>
        
            </Stack>
        </form>
        <Button
                        onClick={checkEmpty}
                        sx={{m: 2, color: '#026f6a', borderColor: '#026f6a'}}
                        variant="outlined" 
                        startIcon={<AddIcon />}>Add Movie</Button>
        <Button
                        onClick={backToHome}
                        sx={{m: 2, color: '#026f6a', borderColor: '#026f6a'}}
                        variant="outlined" 
                        startIcon={<AddIcon />}>Cancel</Button>
    </Box>
    </Box>
     
    )
}

export default Form;