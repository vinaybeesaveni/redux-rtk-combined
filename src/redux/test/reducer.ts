import {PayloadAction} from '@reduxjs/toolkit'
import { INCREMENT } from './types'

type InitialState = {
    count: number
}

const initialState: InitialState = {
    count: 10
}


// type Action = {
//     type: string
//     payload: number
// }

export const user = (state: InitialState = initialState, action:PayloadAction<number> )=>{
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count + action.payload}
        default:
            return state
    }

}