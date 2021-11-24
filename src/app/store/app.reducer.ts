import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromDeviceType from './deviceType/deviceType.reducer';
import * as fromLoading from './loading/loading.reducer';
import * as fromTodo from './todo/todo.reducer';

export interface AppState {
  auth: fromAuth.AuthState;
  deviceType: fromDeviceType.DeviceTypeState;
  loading: fromLoading.LoadingState;
  todo: fromTodo.TodoState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  deviceType: fromDeviceType.deviceTypeReducer,
  loading: fromLoading.loadingReducer,
  todo: fromTodo.todoReducer,
};
