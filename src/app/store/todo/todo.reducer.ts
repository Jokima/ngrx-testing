import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: Array<Todo>;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: TodoState = {
  todos: [],
};

const reducer = createReducer(
  initialState,
  on(TodoActions.setTodos, (state, action) => {
    state = { ...state, todos: [...action.todos] };
    return state;
  }),
  on(TodoActions.failTodos, (state) => {
    console.log('Falha na requisição de buscar todos!');
    return state;
  })
);

export function todoReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
