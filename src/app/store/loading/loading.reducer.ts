import { Action, createReducer, on } from '@ngrx/store';
import * as LoadingActions from './loading.actions';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(LoadingActions.setLoading, (state, action) => {
    state = { ...state, isLoading: action.payload };
    return state;
  })
);

export function loadingReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
