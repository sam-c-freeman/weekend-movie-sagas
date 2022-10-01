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
                        color="error" 
                        sx={{m: 3}}
                        variant="outlined" 
                        startIcon={<HomeIcon />}>Go Home</Button>
        <Button
                        onClick={backToHome}
                        color="error" 
                        sx={{m: 3}}
                        variant="outlined" 
                        startIcon={<AddIcon />}>Add Movie</Button>
      
        </nav>
        </header>
    )
}

export default Header;