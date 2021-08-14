import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home'
import Booking from './Components/Booking'


function App() {
  return (
    <Router>
    <div className="App">
    <Header/>  
    <Switch>

      <Route path="/booking">
        <Booking />
      </Route>
     
      <Route path="/">
            
        <Home />
      </Route>
    </Switch>    

      
    </div>
    </Router>
  );
}

export default App;
