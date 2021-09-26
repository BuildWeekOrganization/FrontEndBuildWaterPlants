import axios from 'axios';
import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';

function LoginForm({error,setAuth}) {
    const {push} = useHistory()
    const [details, setDetails] = useState({username:'', password: ''})

    const submitHandler = e =>{
        e.preventDefault();
        axios.post("https://watermyplants-02.herokuapp.com/api/auth/login", details)
        .then(res=>{
            console.log('Submit', res)
            localStorage.setItem('token', res.data.token);
            setAuth(res.data.token)
            push('/')
        })
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className ='form-card'>
                <h2 className = 'form-title'>Login</h2>
                {(error !== '') ? (<div className = 'error'>{error}</div>) : ''}
                <div className ='form-group'>
                    <label htmlFor ='username'>Username: </label>
                    <input type ='username' name ='username' id = 'username' onChange ={e => setDetails({...details, username: e.target.value})} value ={details.username}/>
                </div>
                <div className ='form-group'>
                    <label htmlFor ='password'>Password: </label>
                    <input type ='password' name ='password' id = 'password' onChange ={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                </div>
                <input type = 'submit' value ='LOGIN' className='submit'/>
                <Link to ='/signup'><a>Don't have an account? Sign up!</a></Link>
            </div>
        </form>
    )
}

export default LoginForm
