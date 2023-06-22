import { createAction, props } from '@ngrx/store';
import { IEmployee } from '../../models/@interfaces';

// Create  get action
export const getAllEmployees = createAction('[Employees] Get Employees');
export const getEmployeesSuccess = createAction(
  '[Employees] Get Employees success',
  props<{ employees: IEmployee[] }>()
);
export const getEmployeesFailure = createAction(
  '[Employees] Get Employees failure',
  props<{ error: string }>()
);

// Create  Post action
export const postEmployee = createAction('[Employees] Post Employee');
export const postEmployeeSuccess = createAction(
  '[Employees] Post Employee success',
  props<{ employees: IEmployee[] }>()
);
export const postEmployeeFailure = createAction(
  '[Employees] Post Employee failure',
  props<{ error: string }>()
);

// get employee by Id action
export const getEmployeeById = createAction(
  '[Employees] Get Employee By Id',
  props<{ id: number }>()
);
export const getEmployeeByIdSuccess = createAction(
  '[Employees] Get Employee By Id success',
  props<{ employee: IEmployee }>()
);
export const getEmployeeByIdFailure = createAction(
  '[Employees] Get Employee By Id failure',
  props<{ error: string }>()
);

// Add a new employee
export const addEmployee = createAction(
  '[Employees] Add Employee',
  props<{ employee: IEmployee }>()
);
export const addEmployeeSuccess = createAction(
  '[Employees] Add Employee  success',
  props<{ employee: IEmployee }>()
);
export const addEmployeeFailure = createAction(
  '[Employees] Add Employee failure',
  props<{ error: string }>()
);

// Add a new employee
export const updateEmployee = createAction(
  '[Employees] Update Employee',
  props<{ employee: IEmployee }>()
);
export const updateEmployeeSuccess = createAction(
  '[Employees] Update Employee  success',
  props<{ employee: IEmployee }>()
);
export const updateEmployeeFailure = createAction(
  '[Employees] Update Employee failure',
  props<{ error: string }>()
);
// Add a new employee
export const deleteEmployee = createAction(
  '[Employees] Delete Employee',
  props<{ id: number }>()
);
export const deleteEmployeeSuccess = createAction(
  '[Employees] Delete Employee  success'
);
export const deleteEmployeeFailure = createAction(
  '[Employees] Delete Employee failure',
  props<{ error: string }>()
);
