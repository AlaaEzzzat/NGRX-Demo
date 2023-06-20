import { createReducer, on } from '@ngrx/store';
import * as EmployeesActions from '../actions/employees_action';
import { EmployeeInterface } from '../../models/@interfaces';
// Create initial state
export const employeeInitialState: EmployeeInterface = {
  isLoading: false,
  employees: [],
  error: null,
};

// Create reducer and pass initial state to it
export const employeesReducers = createReducer(
  employeeInitialState,
  // while fetching employees start loading
  on(EmployeesActions.getAllEmployees, (state) => ({
    ...state,
    isLoading: true,
  })),
  // if employees are fetched successfully stop loading and update employees the state with the result
  on(EmployeesActions.getEmployeesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    employees: action.employees,
  })),
  // if employees are fetched successfully stop loading and update error in  the state with the result
  on(EmployeesActions.getEmployeesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
