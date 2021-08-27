import axios from 'axios'
import axiosWithAuth from './helpers/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import plants from '../StaticPlants'
import PlantPanel from './PlantPanel'
import PlantCreation from './PlantCreation'


export default function Dashboard() {
    const [isHidden, setIsHidden] = useState(true);
    const [plantList, setPlantList] = useState([plants]);
    const [searchValue, setSearchValue] = useState("");
    
    function toggleForm() {
        setIsHidden(!isHidden);
        document.querySelector(".plant-form").classList.toggle("hidden");
        document.querySelector(".create-plant").classList.toggle("hidden");
    }
    function cancelForm() {
        console.log("clicked")
        setIsHidden(true);
        document.querySelector(".plant-form").classList.add("hidden");
        document.querySelector(".create-plant").classList.remove("hidden");
      }

    useEffect(() => {
        axiosWithAuth().get('https://watermyplants-02.herokuapp.com/api/plants')
        .then(res=>{
            console.log(res.data)
            setPlantList(res.data)
        })
        .catch(err=>{
            console.log(err)
        });
    }, []);

    return (
        <div>
                <div className="create-plant" onClick={toggleForm}>
                    <button>Create a Plant!</button>
                </div>
                <div className="plant-form hidden">
                    <PlantCreation setIsHidden={setIsHidden}/>
                    <button onClick={cancelForm}>Cancel</button>
                </div>
                <div>
                    {plantList.map((plant)=>{
                        return <PlantPanel key={plant.id} plant={plant}/>
                    }
                    )}
                </div>
        </div>
    )
}
