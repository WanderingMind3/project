import { Action, lastNameAction } from "./action"

export interface contactState{
    contacts: string[],
    lastName: string[]
}

const initialState = {
    contacts: [],
    lastName: []
}



export const contactReducer = (state:contactState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_CONTACT": {
            return{...state, contacts: [...state.contacts, action.payload]}
        }
        default:
            return state
    }
}


export const lastNameReducer = (state:contactState = initialState, action: lastNameAction) => {
    switch(action.type){
        case "ADD_LASTNAME": {
            return{...state, lastName: [...state.lastName, action.payload]}
        }
        default:
            return state
    }
}