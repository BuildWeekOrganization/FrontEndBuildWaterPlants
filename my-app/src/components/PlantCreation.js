import React, {useState} from 'react'
import axiosWithAuth from './helpers/axiosWithAuth';

const initialFormValues={
    nickname: "",
    species: "",
    h2o_frequency: 0,
    image: "",
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
        axiosWithAuth().post('https://watermyplants-02.herokuapp.com/api/plants', plant)
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
                <div className='plant-form'>
                    <label>Plant's name: </label>
                        <input type='text' name='nickname' onChange={onChange} value={formValues.nickname}/>
                </div>
                <div className='plant-form'>
                    <label>Plant's Species: </label>  
                        <input type='text' name='species' onChange={onChange} value={formValues.species}/>
                </div>
                <div className='plant-form'>
                    <label>When to water: </label> 
                        <input type='number' name='h2o_frequency' onChange={onChange} value={formValues.h2o_frequency}/>
                </div>
                <div className='plant-form'>
                    <label>Add an image of your plant </label>    
                        <input type='file' name='image' onChange={onChange} value={formValues.image} />
                </div>
                
                <button type="submit" className='submit'>Add Plant</button>
            </form>
            
        </div>
    )
}

//h20Frequency = integer
