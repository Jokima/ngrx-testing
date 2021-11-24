import { createAction, props } from "@ngrx/store";

// [DEVICETYPE]

export const updateDevicetype = createAction(
  '[DEVICETYPE] update',
  props<{payload: string}>()
);
