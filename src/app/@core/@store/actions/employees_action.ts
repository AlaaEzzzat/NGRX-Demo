import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IEmployee } from '../../models/@interfaces';

//#region Get All Employees
export const getEmployeesActions = createActionGroup({
  source: 'Employees',
  events: {
    'Get All Employees': emptyProps(),
    'Get Employees  success': props<{ employees: IEmployee[] }>(),
    'Get Employees failure': props<{ error: string }>(),
  },
});
//#endregion

//#region  get employee by Id action
export const getEmployeeByIdActions = createActionGroup({
  source: 'Employees',
  events: {
    'Get  Employee By Id': props<{ id: number }>(),
    'Get Employee By Id success': props<{ employee: IEmployee }>(),
    'Get Employee By Id failure': props<{ error: string }>(),
  },
});
//#endregion

//#region  Add a new employee
export const addEmployeeActions = createActionGroup({
  source: 'Employees',
  events: {
    'Add Employee': props<{ employee: IEmployee }>(),
    'Add Employee  success': props<{ employee: IEmployee }>(),
    'Add Employee failure': props<{ error: string }>(),
  },
});
//#endregion

//#region  Update a new employee
export const updateEmployeeActions = createActionGroup({
  source: '[Employees]',
  events: {
    'Update Employee': props<{ employee: IEmployee }>(),
    'Update Employee  success': props<{ employee: IEmployee }>(),
    'Update Employee failure': props<{ error: string }>(),
  },
});
//#endregion

//#region Delete a new employee
export const deleteEmployeeActions = createActionGroup({
  source: '[Employees]',
  events: {
    'Delete Employee': props<{ id: number }>(),
    'Delete Employee Success': emptyProps(),
    'Delete Employee failure': props<{ error: string }>(),
  },
});
//#endregion
