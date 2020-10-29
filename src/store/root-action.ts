import { routerActions } from "react-router-redux";
import * as personaActions from "~/features/persona/actions";
import * as checklistActions from "~/features/checklist/actions";

export default {
  router: routerActions,
  persona: personaActions,
  checklist: checklistActions,
};
