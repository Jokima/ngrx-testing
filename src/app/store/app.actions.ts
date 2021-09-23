import { createAction, props } from '@ngrx/store';
import { Todo } from './app.reducer';

// [DEVICETYPE]

export const updateDevicetype = createAction(
  '[GLOBAL] [DEVICETYPE] update',
  props<{payload: string}>()
);

// [userId]

export const setUser = createAction(
  '[GLOBAL] [userId] set userId',
  props<{userId: string}>()
);

// [TODOS]

export const getTodos = createAction(
  '[GLOBAL] [TODOS] get user todos',
  props<{userId: string}>()
);

export const setTodos = createAction(
  '[GLOBAL] [TODOS] set todos',
  props<{todos: Array<Todo>}>()
);

export const failTodos = createAction(
  '[GLOBAL] [TODOS] request fail',
  props<{message: string}>()
);

// [LOADING]

export const setLoading = createAction(
  '[GLOBAL] [ISLOADING] set loading',
  props<{payload: boolean}>()
);
