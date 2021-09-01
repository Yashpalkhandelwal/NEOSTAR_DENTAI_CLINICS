import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


// USER
import Header from './User//Components/Header';
import Home from './User/Components/pages/Home'
import Booking from './User/Components/pages/Booking'
import Resigtration from './User/Components/pages/Resigtration'
import Login from './User/Components/pages/Login'
import UserLogedIn from './User/Components/pages/UserLogedIn'
import PatientProfile from './User/Components/pages/PatientProfile'



function App() {
  return (
    <Router>
    <div className="App">
    <Header/>  
    <Switch>

    <Route path="/PatientProfile">
        <PatientProfile />
      </Route>


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
