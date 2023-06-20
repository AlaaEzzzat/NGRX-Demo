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
