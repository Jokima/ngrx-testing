import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { getTodos, setTodos, failTodos } from './app.actions';
import { AppState, Todo } from './app.reducer';

@Injectable({
  providedIn: 'root',
})
export class TodosEffectService {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{global: AppState}>,
  ) {}

  requestTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap((action) => {
        const params = new HttpParams().set('userId', action.userId);
        return this.http.get<Array<Todo>>(
          `https://jsonplaceholder.typicode.com/todos`,
          { params }
        );
      }),
      map((response) => setTodos({ todos: response })),
      catchError(() => of(failTodos({ message: 'Unknwon error' })))
    )
  );
}
