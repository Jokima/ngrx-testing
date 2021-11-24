import { createAction, props } from '@ngrx/store';

export const setUser = createAction(
  '[AUTH] set userId',
  props<{userId: string}>()
);
