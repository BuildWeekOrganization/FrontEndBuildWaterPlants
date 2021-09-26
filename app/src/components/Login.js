import React, {useState} from 'react';
import LoginForm from './LoginForm'
import './styles/login.css';

function Login(props) {
    const [error] = useState('')

    return (
        <div className = 'container'>
                <LoginForm setAuth={props.setAuth} error = {error}/>
        </div>
    );
}
export default Login