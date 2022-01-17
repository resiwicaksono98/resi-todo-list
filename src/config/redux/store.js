import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducer/counterReducer";
import taskReducer from "./reducer/taskReducer";

let rootReducer = combineReducers({
    counter: counterReducer,
    task : taskReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store