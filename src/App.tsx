import React, { ReactElement } from "react";
import { PersonaAnalysisFragment } from "./persona/pages";
import { questions } from "./persona/mock";
import { BasicLayout } from "./layouts/basic";

function CheckHaebangApp(): ReactElement {
  return (
    <BasicLayout>
      <PersonaAnalysisFragment questions={questions} />
    </BasicLayout>
  );
}

export default CheckHaebangApp;
