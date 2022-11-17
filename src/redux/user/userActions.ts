import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";


export interface IUser{
    id:number
    name: string
    username: string
    email: string
    website: string
}

function fetchUsersRequest(){
    return {
        type: FETCH_USERS_REQUEST
    }
}

function fetchUsersSuccess(users: IUser[]){
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users,
    }
}

function fetchUsersFailure(error: string){
    return {
        type: FETCH_USERS_FAILURE,
        payload:error
    }
}

export function fetchUsers(){
    return (dispatch: Dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            const users = response.data.map((each: IUser)=>({
                id: each.id,
                name: each.name,
                username: each.username,
                email: each.email,
                website: each.website
            }))
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error))
        })

    }
}