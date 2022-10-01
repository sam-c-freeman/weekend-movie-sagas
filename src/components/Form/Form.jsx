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

function Form (){
    return(
       <Box sx={{ height: '100%' }}>
        <Card style={{maxWidth:750, margin:"0 auto", padding:"20px 20px"}}>
                <p>I am a form</p>
                

            </Card>
        </Box>
    )
}

export default Form;