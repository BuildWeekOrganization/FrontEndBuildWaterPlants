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
    const [plant, setPlant] = useState({})


    function onChange(e){
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
        console.log(formValues)
    }
    function onSubmit(e) {
        e.preventDefault();
        setPlant(formValues)
        axiosWithAuth().post('api/plants', plant)
        .then(res=>{
            console.log(res)
            props.setPlantList(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        setFormValues(initialFormValues)
        props.setIsHidden(true)
        console.log(formValues);
      }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Plant's name
                    <input type='text' name='nickname' onChange={onChange} value={formValues.nickname}/>
                </label>
                <label>Plant's Species
                    <input type='text' name='species' onChange={onChange} value={formValues.species}/>
                </label>
                <label>When to water
                    <input type='number' name='h2o_frequency' onChange={onChange} value={formValues.h2o_frequency}/>
                </label>
                <label>Add an image of your plant
                    <input type='file' name='image' onChange={onChange} value={formValues.image}/>
                </label>
                <button type="submit" >Add Plant</button>
            </form>
            
        </div>
    )
}

//h20Frequency = integer
