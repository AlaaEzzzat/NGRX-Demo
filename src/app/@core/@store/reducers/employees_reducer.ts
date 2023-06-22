import { createReducer, on } from '@ngrx/store';
import * as EmployeesActions from '../actions/employees_action';
import { EmployeeInterface, IEmployee } from '../../models/@interfaces';
// Create initial state
export const employeeInitialState: EmployeeInterface = {
  isLoading: false,
  employees: [],
  error: null,
  selectedEmployee: {} as IEmployee,
};

// Create reducer and pass initial state to it
export const employeesReducers = createReducer(
  employeeInitialState,
  // while fetching employees start loading
  on(EmployeesActions.getEmployeesActions.getAllEmployees, (state) => ({
    ...state,
    isLoading: true,
  })),
  // if employees are fetched successfully stop loading and update employees the state with the result
  on(
    EmployeesActions.getEmployeesActions.getEmployeesSuccess,
    (state, action) => ({
      ...state,
      isLoading: false,
      employees: action.employees,
    })
  ),
  // if employees are fetched successfully stop loading and update error in  the state with the result
  on(
    EmployeesActions.getEmployeesActions.getEmployeesFailure,
    (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),

  // get employeeById
  on(
    EmployeesActions.getEmployeeByIdActions.getEmployeeById,
    (state, { id }) => {
      const selectedEmployee = state.employees.find((emp) => emp.id === id);
      return {
        ...state,
        selectedEmployee,
      };
    }
  ),

  // Add employee Success state
  on(
    EmployeesActions.addEmployeeActions['addEmployeeSuccess'],
    (state, { employee }) => ({
      ...state,
      employees: [...state.employees, employee],
    })
  ),

  // update employee Success state
  on(
    EmployeesActions.updateEmployeeActions.updateEmployeeSuccess,
    (state, { employee }) => ({
      ...state,
      employees: [
        ...state.employees.filter((emp: IEmployee) => {
          return employee.id !== emp.id;
        }),
        employee,
      ],
    })
  ),
  // Delete employee
  on(
    EmployeesActions.deleteEmployeeActions['deleteEmployee'],
    (state, { id }) => ({
      ...state,
      employees: [
        ...state.employees.filter((emp: IEmployee) => {
          return id !== emp.id;
        }),
      ],
    })
  )
);
