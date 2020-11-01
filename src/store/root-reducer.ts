import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import personaReducer from "~/features/persona/reducers";
import checklistReducer from "~/features/checklist/reducers";
import roomsReducer from "~/features/rooms/reducers";

const rootReducer = combineReducers({
  router: routerReducer,
  persona: personaReducer,
  checklist: checklistReducer,
  rooms: roomsReducer,
});

export default rootReducer;
