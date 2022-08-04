import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'

// Reducers
import egReducer from "./egReducer"

const reducer = combineReducers({
    egReducer
})

const store = configureStore({
    reducer,
})

export default store