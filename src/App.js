import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/pages/Home'
import Booking from './Components/pages/Booking'
import Resigtration from './Components/pages/Resigtration'
import Login from './Components/pages/Login'
import UserLogedIn from './Components/pages/UserLogedIn'



function App() {
  return (
    <Router>
    <div className="App">
    <Header/>  
    <Switch>

    <Route path="/UserLogedIn">
        <UserLogedIn />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

    <Route path="/resigtration">
        <Resigtration />
      </Route>

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
