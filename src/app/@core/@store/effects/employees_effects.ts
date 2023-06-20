import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { EmployeesService } from '../../@services';
import { IEmployee } from '../../models/@interfaces';
import * as EmployeesAction from '../actions/employees_action';

@Injectable()
export class EmployeesEffects {
  // call api inside RXJS and create effect
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService
  ) {}
  getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesAction.getAllEmployees),
      mergeMap(() => {
        return this.employeesService.getAllEmployees().pipe(
          map((employees: IEmployee[]) =>
            EmployeesAction.getEmployeesSuccess({ employees })
          ),
          catchError((error) =>
            of(EmployeesAction.getEmployeesFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
