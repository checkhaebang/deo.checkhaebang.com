import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { loadQuestionsAsync, postAnswersAsync } from "./actions";
import { getAnswers } from "./selectors";

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadQuestionsAsync.request)),
    switchMap(() =>
      from(api.persona.fetchQuestions()).pipe(
        map(loadQuestionsAsync.success),
        catchError((message: string) => of(loadQuestionsAsync.failure(message)))
      )
    )
  );

export const saveAnswersEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(postAnswersAsync.request)),
    switchMap(() =>
      from(api.persona.postAnswers(getAnswers(state$.value.persona))).pipe(
        map(postAnswersAsync.success),
        catchError((message: string) => of(postAnswersAsync.failure(message)))
      )
    )
  );
};
