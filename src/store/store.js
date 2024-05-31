import { combineReducers, compose, legacy_createStore as createStore } from "redux"
import { taskReducer } from "./reducers/task.reducer.js"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    taskModule: taskReducer,
})

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
