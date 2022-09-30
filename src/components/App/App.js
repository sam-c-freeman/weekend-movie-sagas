import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <h1 className="header">The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/:id" exact>
          <DetailsPage/>
        </Route>
        
    

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
