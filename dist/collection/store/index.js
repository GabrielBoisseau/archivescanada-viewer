import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
export const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
