import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import personaReducer from "~/features/persona/reducers";

const rootReducer = combineReducers({
  router: routerReducer,
  persona: personaReducer,
});

export default rootReducer;
