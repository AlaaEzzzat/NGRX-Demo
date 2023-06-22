import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  employeesErrorSelector,
  employeesSelector,
} from 'src/app/@core/@store';
import { AppStateInterface, IEmployee } from 'src/app/@core/models/@interfaces';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.scss'],
})
export class AllEmployeeComponent implements OnInit {
  //#region Declerations
  // observables from result

  error$: Observable<string | null>;
  employees$: Observable<IEmployee[]>;
  //#endregion Declerations

  //#region lifecycle methods
  constructor(private store: Store<AppStateInterface>) {
    // select loading from posts by postsSelector
    this.employees$ = this.store.pipe(select(employeesSelector));
    // select loading from error by errorSelector
    this.error$ = this.store.pipe(select(employeesErrorSelector));
  }

  ngOnInit(): void {}
  //#endregion lifecycle methods
}
