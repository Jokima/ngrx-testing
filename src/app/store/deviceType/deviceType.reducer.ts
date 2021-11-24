import { Action, createReducer, on } from '@ngrx/store';
import * as DeviceTypeActions from './deviceType.actions';

export interface DeviceTypeState {
  deviceType: string;
}

const initialState: DeviceTypeState = {
  deviceType: 'desktop',
};

const reducer = createReducer(
  initialState,
  on(DeviceTypeActions.updateDevicetype, (state, action) => {
    state = { ...state, deviceType: action.payload };
    return state;
  })
);

export function deviceTypeReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
