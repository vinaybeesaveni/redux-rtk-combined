import { INCREMENT } from "./types";

export function increment(number: number){
    return {
        type: INCREMENT,
        payload: 5
    }
}