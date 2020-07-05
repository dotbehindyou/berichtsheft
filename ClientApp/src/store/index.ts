import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reportsReducer from "./bh.reducer";



const loggerMiddleware = createLogger();

const store = createStore(
    reportsReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;