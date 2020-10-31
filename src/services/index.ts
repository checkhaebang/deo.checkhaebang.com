import * as logger from "./logger-service";
import * as persona from "./persona";
import * as checklist from "./checklist";

export default {
  logger,
  api: { persona, checklist },
};
