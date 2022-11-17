import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

import { IUser } from "./userActions"


interface IState{
    loading: boolean
    users: IUser[]
    error:string
}

const initialState = {
    loading:true,
    users:[],
    error:''
}

interface Action{
    type: string
    payload: string | IUser[]
}

export const userReducer = (state: IState = initialState, action:Action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading:false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading:false,
                users:[],
                error: action.payload
            }
        default:
            return state
    }
}


