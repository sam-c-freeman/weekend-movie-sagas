import '../App/App.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from 'react-router-dom';

function Header () {
    const history = useHistory();
    
    const backToHome = () =>{
        history.push('/')
  }

  
    
    return(
        <header>
        <h1 className="title">The Movies Saga</h1>
        <nav>
        
        <Button
                        onClick={backToHome}
                       
                        sx={{m: 3, color: '#c7f5f3', borderColor: '#00fff2' }}
                        variant="outlined" 
                        startIcon={<HomeIcon />}>Go Home</Button>
        <Button
                       
                   
                        sx={{m: 3, color: '#c7f5f3', borderColor: '#00fff2' }}
                        variant="outlined" 
                        startIcon={<AddIcon />}>Add Movie</Button>
      
        </nav>
        </header>
    )
}

export default Header;