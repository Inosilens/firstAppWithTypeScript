import {UserAction, UserActionsType, UserState} from "../../types/users";


const defaultState = {
    users : [],
    loading : false,
    error : null
}

export const userReducer = (state:UserState=defaultState,action:UserAction):UserState => {
switch (action.type){
    case UserActionsType.FETCH_USERS :
        return { loading:true, error:null ,users:[] }
    case UserActionsType.FETCH_USERS_SUCCES :
        return { loading:false, error:null, users:action.payload }
    case UserActionsType.FETCH_USERS_ERROR :
        return { loading:false, error:action.payload, users:[] }
    default:
        return state

}

}