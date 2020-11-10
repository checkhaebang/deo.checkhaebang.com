import { combineEpics } from "redux-observable";
import * as personaEpics from "~/features/persona/epics";
import * as checklistEpics from "~/features/checklist/epics";
import * as roomsEpics from "~/features/rooms/epics";

export default combineEpics(
  ...Object.values(personaEpics),
  ...Object.values(checklistEpics),
  ...Object.values(roomsEpics)
);
