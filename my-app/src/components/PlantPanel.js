import React from 'react'
import './styles/dashboard.css'
export default function PlantPanel(props) {

    return (
        <div className ='panel'>
            <h2>{props.plant.nickname}</h2>
            <img src={props.plant.image} alt={props.plant.nickname} />
            <p> {props.plant.nickname} is a {props.plant.species}.</p>
            <p> Make sure {props.plant.nickname} is watered every {props.plant.h2o_frequency} days!</p>
        </div>
    )
}
