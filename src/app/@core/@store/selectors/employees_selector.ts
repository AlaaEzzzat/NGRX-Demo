import { createSelector } from '@ngrx/store';
import { AppStateInterface, IEmployee } from '../../models/@interfaces';
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

export const getSelectedEmployee = createSelector(
  (state: AppStateInterface) => state.employees.employees,
  (state: AppStateInterface) => state.employees.selectedEmployee!,
  (employees: IEmployee[], selectedEmployee: IEmployee) => {
    if (!selectedEmployee) {
      return {} as IEmployee;
    }
    return (
      employees.find((emp) => emp.id === selectedEmployee.id) ||
      ({} as IEmployee)
    );
  }
);
