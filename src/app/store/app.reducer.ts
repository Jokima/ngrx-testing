import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface AppState {
  deviceType: string;
  userId: string;
  todos: Array<Todo>;
  isLoading: boolean;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: AppState = {
  deviceType: 'desktop',
  userId: '',
  todos: [],
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(AppActions.updateDevicetype, (state, action) => {
    state = { ...state, deviceType: action.payload };
    return state;
  }),
  on(AppActions.setLoading, (state, action) => {
    state = { ...state, isLoading: action.payload };
    return state;
  }),
  on(AppActions.setUser, (state, action) => {
    state = { ...state, userId: action.userId };
    return state;
  }),
  on(AppActions.setTodos, (state, action) => {
    state = { ...state, todos: [...action.todos] };
    return state;
  })
);

export function appReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
