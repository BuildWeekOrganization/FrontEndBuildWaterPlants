import React, {useState} from 'react'

export default function PlantCreation() {
    const [plant, setPlant] = useState({
        id: '',
        nickname: '',
        species: '',
        h2oFrequency: '',
        image: ''
    })

    function onChange(e){
        const {name, value} = e.target;
        setPlant({ ...plant, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault();
        setPlant({
            id: '',
            nickname: '',
            species: '',
            h2oFrequency: '',
            image: ''
        });
        console.log(plant);
      }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Plant's name
                    <input type='text' name='nickname' onChange={onChange} value={plant.nickname}/>
                </label>
                <label>Plant's Species
                    <input type='text' name='species' onChange={onChange} value={plant.species}/>
                </label>
                <label>When to water
                    <input type='time' name='h2oFrequency' onChange={onChange} value={plant.h2oFrequency}/>
                </label>
                <label>Add an image of your plant
                    <input type='file' name='image' onChange={onChange} value={plant.image}/>
                </label>
                <button type="submit" >Add Plant</button>
            </form>
            
        </div>
    )
}
