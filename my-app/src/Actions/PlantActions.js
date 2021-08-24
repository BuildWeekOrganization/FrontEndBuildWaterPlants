export const DELETE_PLANT = "DELETE_PLANT"
export const ADD_PLANT = "ADD_PLANT"

export const deletePlant = (id)=>{
    return({type: DELETE_PLANT, payload:id })
}

export const addPlant = (plant)=>{
    return({type:ADD_PLANT, payload:plant})
}