import { PersonaQuestion } from "./models";
// import { createSelector } from 'reselect';

import { PersonaState } from "./reducers";

export const getQuestions = (state: PersonaState): Array<PersonaQuestion> =>
  state.questions;
export const getCurrentIdx = (state: PersonaState): number => state.currentIdx;
export const getAnswers = (state: PersonaState): Array<number> => state.answers;
