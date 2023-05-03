import {createStore} from 'redux'
import { contactReducer, lastNameReducer} from './contactReducer'

export const store = createStore(contactReducer)

export const store1 = createStore(lastNameReducer)