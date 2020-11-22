import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { loadChecklist } from "./actions";

export const loadChecklistEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadChecklist.request)),
    switchMap(() =>
      from(api.checklist.fetchCheckQuestions()).pipe(
        map(loadChecklist.success),
        catchError((message: string) => of(loadChecklist.failure(message)))
      )
    )
  );
