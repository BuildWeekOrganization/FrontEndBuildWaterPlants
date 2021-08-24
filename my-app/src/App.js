import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Login from './components/Login'
import Home from './components/Home'
import PlantCreation from './components/PlantCreation';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
    <div className="App">

      <div id='Header'>
        <h1>Water My Plants!</h1>
      </div>
    <Switch>
        <Route path={'/signup'}>
          <SignUp />
        </Route>
      </Switch>
    </div>
      <Route exact path = '/'><Home/></Route>
      <Route exact path ='/login'> <Login/></Route>
    </Router>
  );
}

export default App;
