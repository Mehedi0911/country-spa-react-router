import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      
        <Router>
          <Switch>

            <Route path="/home">
               <Home></Home>
            </Route>

            <Route exact path="/">
            <Home></Home>
            </Route>

            <Route path="/countryDetails/:countryName">
             <CountryDetails></CountryDetails>
            </Route>

            <Route path="*">
            <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
        
     
    </div>
  );
}

export default App;
