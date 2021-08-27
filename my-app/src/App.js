import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import React, {useState, useEffect} from 'react';

import Login from './components/Login'
import Home from './components/Home'
import PlantCreation from './components/PlantCreation';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {

  const Logout=()=>{
    localStorage.removeItem('token')
    setAuth('')
  }
  
  const [auth, setAuth] = useState('')

  useEffect(() => {}, [auth])

  return (
    <Router>
    <div className="App">
      <header>
        <h1>Water My Plants!</h1>
        <nav>{
        localStorage.getItem('token') ? ( <><Link to='/dashboard'>Visit Plants / Create Plant</Link><Link to='/login' onClick={Logout}>Logout</Link></>):(<><Link to='/login'> Login </Link><Link to='/signup'> Sign-up </Link></>)
        }</nav>

      </header>
      
      <Switch>
        <Route path='/signup'><SignUp/></Route>
        <Route path ='/login'> <Login setAuth={setAuth}/></Route>
        <Route path ='/dashboard'><Dashboard/> </Route>
        <Route exact path = '/'><Home/></Route>
      </Switch>
    </div>
      
    </Router>
  );
}

export default App;
