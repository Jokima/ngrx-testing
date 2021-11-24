import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.reducer';

export const getTodos = createAction(
  '[TODOS] get user todos',
  props<{userId: string}>()
);

export const setTodos = createAction(
  '[TODOS] set todos',
  props<{todos: Array<Todo>}>()
);

export const failTodos = createAction(
  '[TODOS] request fail',
  props<{message: string}>()
);
