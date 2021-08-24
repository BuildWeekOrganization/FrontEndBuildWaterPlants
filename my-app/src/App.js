import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">

    </div>
      <Route exact path = '/'><Home/></Route>
      <Route exact path ='/login'> <Login/></Route>
    </Router>
  );
}

export default App;
