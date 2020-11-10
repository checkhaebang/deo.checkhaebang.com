import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, switchMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { loadRooms } from "./actions";

export const loadRoomsEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadRooms.request)),
    switchMap(() =>
      from(api.rooms.fetchRooms()).pipe(
        map(loadRooms.success),
        catchError((message: string) => of(loadRooms.failure(message)))
      )
    )
  );
