import axiosWithAuth from './helpers/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import PlantPanel from './PlantPanel'
import PlantCreation from './PlantCreation'


export default function Dashboard() {
    const [isHidden, setIsHidden] = useState(true);
    const [plantList, setPlantList] = useState([]);
    
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
            <div className='container'>
                <div className="create-plant" onClick={toggleForm}>
                    <button className='submit'>Create a Plant</button>
                </div>
                    
                <div className="plant-form hidden">
                    <PlantCreation setPlantList={setPlantList} setIsHidden={setIsHidden}/>
                    <button onClick={cancelForm} className='submit'>Cancel</button>
                </div>
                <div className='plants-container'>
                    {plantList.map((plant)=>{
                        return <PlantPanel key={plant.id} plant={plant} />
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
