import axios from 'axios';
import React, {useState} from 'react'
import axiosWithAuth from './helpers/axiosWithAuth';

const initialFormValues={
    nickname: "",
    species: "",
    h2o_frequency: 0,
    image: "",
    plant_id:"",
    user_id:""
}

export default function PlantCreation(props) {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [plant, setPlant] = useState({
        nickname: "",
        species: "",
        h2o_frequency: 0,
        image: "",
        plant_id:"",
        user_id:""
    })

    function onChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
        console.log(formValues)
    }
    function onSubmit(e) {
        e.preventDefault();
        axiosWithAuth().post('https://watermyplants-02.herokuapp.com/api/plants', formValues)
        .then(res=>{
            console.log(res)
            setPlant(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        setPlant()
        props.setIsHidden(true)
        console.log(plant);
      }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='group'>
                <label>Plant's name:&nbsp;
                    <input type='text' name='nickname' onChange={onChange} value={formValues.nickname}/>
                </label>
                <label>Plant's Species:&nbsp;
                    <input type='text' name='species' onChange={onChange} value={formValues.species}/>
                </label>
                <label>When to water:&nbsp;
                    <input type='number' name='h2o_frequency' onChange={onChange} value={formValues.h2o_frequency}/>
                </label>
                <label>Add an image of your plant:&nbsp; 
                    <input type='file' name='image' onChange={onChange} value={formValues.image}/>
                </label>
                <button className = 'create' type="submit" >Add Plant</button>
                </div>
            </form>
            
        </div>
    )
}

//h20Frequency = integer
