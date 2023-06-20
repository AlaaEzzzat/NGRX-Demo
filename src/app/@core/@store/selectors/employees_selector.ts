import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../models/@interfaces';
export const selectEmployeesFeature = (state: AppStateInterface) =>
  state.employees;
// create loading selector
export const employeesIsLoadingSelector = createSelector(
  selectEmployeesFeature,
  (state) => state.isLoading
);
// create error selector
export const employeesErrorSelector = createSelector(
  selectEmployeesFeature,
  (state) => state.error
);

export const employeesSelector = createSelector(
  selectEmployeesFeature,
  (state) => state?.employees
);
