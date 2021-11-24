import { createAction, props } from "@ngrx/store";

export const setLoading = createAction(
  '[LOADING] set loading',
  props<{payload: boolean}>()
);
