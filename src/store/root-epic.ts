import { combineEpics } from "redux-observable";
import * as personaEpics from "~/features/persona/epics";

export default combineEpics(...Object.values(personaEpics));
