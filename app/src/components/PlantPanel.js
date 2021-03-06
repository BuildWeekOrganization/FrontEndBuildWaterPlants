import React from 'react'

export default function PlantPanel(props) {

    return (
        <div className='plants'>
            <h2>{props.plant.nickname}</h2>
            <img src={props.plant.image} alt={props.plant.nickname} />
            <p> {props.plant.nickname} is a {props.plant.species}.</p>
            <p> Make sure {props.plant.nickname} is watered every <span className='watering'>{props.plant.h2o_frequency} days!</span></p>
        </div>
    )
}
