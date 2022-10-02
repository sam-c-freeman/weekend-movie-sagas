import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import Header from '../Header/Header';
import Form from '../Form/Form';

function App() {
  return (
    <div className="App">
     
      <Router>  
      <Header/>      
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movie/:id" exact>
          <DetailsPage/>
        </Route>
        <Route path="/form" exact>
          <Form/>
        </Route>
      </Router>
    </div>
  );
}


export default App;
