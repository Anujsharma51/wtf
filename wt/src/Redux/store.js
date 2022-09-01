import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  reducer: reducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
