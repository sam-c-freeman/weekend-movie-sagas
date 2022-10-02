import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Form.css';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Form (){
    return(
    <Box mb={2}>
    <Box  className="form" sx={{  
                            border: 2 , 
                            borderColor: "#00fff2",
                            borderRadius: 1, 
                            maxWidth:600, 
                            margin:"0 auto",
                             }}>
        
        <Typography variant="h4" gutterBottom mt={2}>
                                Add a Movie
        </Typography>
        <Stack spacing={2} m={2}>
            <TextField
            id="outlined-helperText"
            placeholder="Movie Title"
            />
            <TextField
            id="outlined-helperText"
            placeholder="Movie Poster URL"
            />
             <TextField
            id="outlined-helperText"
            multiline
            rows={3}
            placeholder="Description"
            />
            <TextField
            id="outlined-helperText"
            placeholder="Genre"
            />
        
        </Stack>
        <Button
                        // onClick={addAMovie}
                        sx={{m: 2, color: '#026f6a', borderColor: '#026f6a'}}
                        variant="outlined" 
                        startIcon={<AddIcon />}>Add Movie</Button>
    </Box>
    </Box>
     
    )
}

export default Form;