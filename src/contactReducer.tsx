import { Action, lastNameAction } from "./action"

export interface contactState{
    contacts: string[]
}

export interface lastNameState{
    lastName: string[]
}

const initialState = {
    contacts: []
}

const initialState1 = {
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


export const lastNameReducer = (state:lastNameState = initialState1, action: lastNameAction) => {
    switch(action.type){
        case "ADD_LASTNAME": {
            return{...state, lastName: [...state.lastName, action.payload]}
        }
        default:
            return state
    }
}