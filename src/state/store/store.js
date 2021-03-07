import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from '../reducers'


const initialState = { groupsReducer: { groups: [] } }

const middleWare = [thunk]

const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleWare)))


export default store;