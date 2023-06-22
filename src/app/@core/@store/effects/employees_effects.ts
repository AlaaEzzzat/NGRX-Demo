import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { EmployeesService } from '../../@services';
import { AppStateInterface, IEmployee } from '../../models/@interfaces';
import * as EmployeesAction from '../actions/employees_action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class EmployeesEffects {
  // call api inside RXJS and create effect
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService,
    private __router: Router,
    private store: Store<AppStateInterface>
  ) {}
  getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesAction.getEmployeesActions.getAllEmployees),
      mergeMap(() => {
        return this.employeesService.getAllEmployees().pipe(
          map((employees: IEmployee[]) =>
            EmployeesAction.getEmployeesActions.getEmployeesSuccess({
              employees,
            })
          ),
          catchError((error) =>
            of(
              EmployeesAction.getEmployeesActions.getEmployeesFailure({
                error: error.message,
              })
            )
          )
        );
      })
    )
  );

  // Add Employee
  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesAction.addEmployeeActions.addEmployee),
      concatMap(({ employee }) =>
        this.employeesService.addEmployee(employee).pipe(
          map((employee: IEmployee) =>
            EmployeesAction.addEmployeeActions.addEmployeeSuccess({ employee })
          ),
          catchError((error) =>
            of(
              EmployeesAction.addEmployeeActions.addEmployeeFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  //Update employee
  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesAction.updateEmployeeActions.updateEmployee),
      concatMap(({ employee }) =>
        this.employeesService.updateEmployee(employee).pipe(
          tap(() => this.__router.navigate(['employee/home'])),
          map((employee: IEmployee) =>
            EmployeesAction.updateEmployeeActions.updateEmployeeSuccess({
              employee,
            })
          ),
          catchError((error) =>
            of(
              EmployeesAction.addEmployeeActions.addEmployeeFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
  deleteEmployee$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EmployeesAction.deleteEmployeeActions.deleteEmployee),
        concatMap(({ id }) =>
          this.employeesService
            .deleteEmployee(id)
            .pipe(tap(() => this.__router.navigate(['employee/home'])))
        )
      ),
    { dispatch: false }
  );
}
