import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import './styles/login.css';

function Home(){
return (

    <div className="App">
      <div className='container'>
        <div className='welcome'>
          <h1>Welcome to Water My Plants!</h1>
          <h3>Our goal is to create an easy way for our users to keep track of how often to water their plants!</h3>
        </div>
      </div>
    </div>

  );
}

export default Home;
