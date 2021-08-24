
import './App.css';

import { Route, Link, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Link to='/signup'>Sign up</Link>
      <Switch>
        <Route path={'/signup'}>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
