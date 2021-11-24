import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  userId: string;
}

const initialState: AuthState = {
  userId: '',
};

const reducer = createReducer(
  initialState,
  on(AuthActions.setUser, (state, action) => {
    state = { ...state, userId: action.userId };
    return state;
  })
);

export function authReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
