import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  employeesErrorSelector,
  employeesIsLoadingSelector,
  employeesSelector,
} from 'src/app/@core/@store';
import { AppStateInterface, IEmployee } from 'src/app/@core/models/@interfaces';

import * as EmployeeAction from 'src/app/@core/@store/actions/employees_action';
@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.scss'],
})
export class AllEmployeeComponent implements OnInit {
  //#region Declerations
  // observables from result
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  employees$: Observable<IEmployee[]>;
  //#endregion Declerations

  //#region lifecycle methods
  constructor(private store: Store<AppStateInterface>) {
    // select loading from state by loadingSelector
    this.isLoading$ = this.store.pipe(select(employeesIsLoadingSelector));
    // select loading from posts by postsSelector
    this.employees$ = this.store.pipe(select(employeesSelector));
    // select loading from error by errorSelector
    this.error$ = this.store.pipe(select(employeesErrorSelector));
  }

  ngOnInit(): void {
    // dispatch event to get posts from backend
    this.store.dispatch(EmployeeAction.getAllEmployees());
  }
  //#endregion lifecycle methods
}
