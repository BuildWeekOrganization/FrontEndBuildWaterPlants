import React, {useState} from 'react';
import LoginForm from './LoginForm'
import './styles/login.css';
function Login() {
    const AdminUser ={
        email: 'admin@admin.com',
        password:"admin"
    }
    const [user, setUser] = useState({email:''})
    const [error, setError] = useState('')

    const LoginF = details =>{
        console.log(details)

        if(details.email === AdminUser.email && details.password === AdminUser.password){
            console.log('Logged in!');
            setUser({
                email: details.email
            })
        } else{setError('User does not exist!')}

    }
    const Logout = () =>{
        setUser({email:""})
    }

    return (
        <div className = 'container'>
            {(user.email !=='')? (
                <div className ='success'>
                    <h2>Welcome, {user.email}</h2>
                    <button onClick = {Logout}>Logout</button>
                </div>
            ):(
                <LoginForm LoginF ={LoginF} error = {error}/>
            )
        }
        </div>
    );
}
export default Login