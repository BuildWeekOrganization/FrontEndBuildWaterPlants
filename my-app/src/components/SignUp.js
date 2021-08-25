import axios from 'axios';
import React, {useEffect, useState} from 'react'
import * as yup from 'yup';
import schema from '../Validation/SignUpValidation'
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
    const [user, setUser]= useState([])
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
            console.log(res)
            push('/login')
        })
    }

    //schema

    useEffect( () => {
        schema.isValid(userValues).then(valid => setDisabled(!valid))
    }, [userValues])


    //return


    return(
        <form className='Form' onSubmit={onSubmit}>


            <div className='Errors'>
                <div className='Placeholder'></div>
            </div>


            <div className='Inputs'>
                <label>Username: 
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value= {userValues.username}
                        onChange={onChange}
                    />
                </label>
{/*                 
                <label>E-mail: 
                    <input
                        type='email'
                        name='email'
                        placeholder='E-Mail'
                        value= {userValues.email}
                        onChange={onChange}
                    />
                </label> */}

                <label>Phone Number: 
                    <input
                        type='tel'
                        name='phone_num'
                        placeholder='000-123-1234'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        value= {userValues.phone_num}
                        onChange={onChange}
                    />
                </label>

                <label>Password:
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value= {userValues.password}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className='submitBtn'>
                <input type='submit' value='Sign Up' disabled={disabled} />
            </div>

        </form>
    );
}