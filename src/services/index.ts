import * as logger from "./logger-service";
import * as persona from "./persona";
import * as checklist from "./checklist";
import * as rooms from "./rooms";

export default {
  logger,
  api: { persona, checklist, rooms },
};
