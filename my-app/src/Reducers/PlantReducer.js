import plants from "../StaticPlants"

const initialState = {
    plants: plants,
    appTitle: "Water My Plants"
}

const reducer= (state= initialState, action)=>{
    switch(action.type){
        case ADD_PLANT:
            return{
                ...state,
                plants:[...state.plants, action.payload]
            }
        case DELETE_PLANT:
            return{
                plants:state.plants.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}