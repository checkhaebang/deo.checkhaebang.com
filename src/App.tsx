import React, { ReactElement } from "react";
import { PersonaAnalysisFragment } from "./persona/components";
import { questions } from "./persona/mock";

function CheckHaebangApp(): ReactElement {
  return <PersonaAnalysisFragment questions={questions} />;
}

export default CheckHaebangApp;
