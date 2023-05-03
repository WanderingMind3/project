import { Action } from "./action"

export interface contactState{
    contacts: string[]
}

const initialState = {
    contacts: []
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