import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { getTodos, setTodos, failTodos } from './todo.actions';
import { Todo } from 'src/app/store/todo/todo.reducer';

@Injectable({
  providedIn: 'root',
})
export class TodosEffectService {
  constructor(private actions$: Actions, private http: HttpClient) {}

  requestTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap((action) => {
        const params = new HttpParams().set('userId', action.userId);
        return this.http
          .get<Array<Todo>>(`https://jsonplaceholder.typicode.com/todos`, {
            params,
          })
          .pipe(
            map((response) => setTodos({ todos: response })),
            catchError(() => of(failTodos({ message: 'Unknown error' }))),
          );
      })
    )
  );
}
