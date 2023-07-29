import { createStore ,applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"

import taskReducer from "../reducers/taskReducer"


const store = createStore(
   taskReducer,
   composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;