import axios from 'axios';
import React, {useEffect, useState} from 'react'
import * as yup from 'yup';
import schema from '../Validation/SignUpValidation'
import './styles/login.css';
import { useHistory } from 'react-router';


const initialFormValues ={
    username:'',
    phone_num:'',
    password:''
}

const initialErrors ={
    username:'',
    phone_num:'',
    password:''
}

const initialDisabled = false

export default function SignUp(){

    //states

    const [disabled, setDisabled] = useState(initialDisabled)
    const [userValues, setUserValues] = useState(initialFormValues)
    const [errors, setErrors]= useState(initialErrors)
    const {push}=useHistory()

    //validation

    const validation = (name, value) =>{
        yup.reach(schema, name)
            .validate(value)
            .then( ()=>setErrors({ ...errors, [name]: ''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    // change

    const inputChange = (name, value) =>{
        validation(name, value)
        setUserValues({...userValues, [name]: value})
    };

    const onChange = evt =>{
        const {name, value } = evt.target
        inputChange(name, value)
    }

    //submit

    // const submitUser =  () =>{
    //         const newUser = {
    //             username: userValues.username.trim(),
    //             phone:userValues.phone.trim(),
    //             password:userValues.password.trim()
    //         }
    //     setUser([newUser, ...user]);
    //     }
    
    const onSubmit = evt=>{
        evt.preventDefault();
        axios.post("https://watermyplants-02.herokuapp.com/api/auth/register", userValues)
        .then(res=>{
            console.log(res.data)
            push('/login')
        })
    }

    //schema

    useEffect( () => {
        schema.isValid(userValues).then(valid => setDisabled(!valid))
    }, [userValues])


    //return


    return(
        <div className='container'>
            <form className='form-card' onSubmit={onSubmit}>
                <h2 className='form-title'>Sign Up</h2>
                


                <div className='Inputs'>
                    <div className='form-group'>
                        <label htmlFor ='username'>Username: </label>
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                value= {userValues.username}
                                onChange={onChange}
                            />
                        <div className='errors'>{errors.username}</div>   
                    </div>
                    

                    {/* <div className='form-group'>
               
                        <label>E-mail: </label> 
                            <input
                                type='email'
                                name='email'
                                placeholder='E-Mail'
                                value= {userValues.email}
                                onChange={onChange}
                            />
                        <br/>
                    </div> */}

                    <div className='form-group'>
                        <label>Phone Number:  </label>
                            <input
                                type='tel'
                                name='phone_num'
                                placeholder='000-123-1234'
                                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                value= {userValues.phone_num}
                                onChange={onChange}
                            />
                        <div className='errors'>{errors.phone_num}</div>    
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password: </label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value= {userValues.password}
                                onChange={onChange}
                            />
                        <div className='errors'>{errors.password}</div>  
                    </div>
                    
                </div>

                <div >
                    <input type='submit' value='Sign Up' disabled={disabled}className='submit' />
                </div>

            </form> 
        </div>
        

    );
}