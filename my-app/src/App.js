import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Route, Link, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <div id='Header'>
        <h1>Water My Plants!</h1>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign up</Link>
      </div>
    <Switch>
        <Route path={'/signup'}>
          <SignUp />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
