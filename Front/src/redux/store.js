import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


var store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

