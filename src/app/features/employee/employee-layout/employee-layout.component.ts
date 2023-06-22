import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/@core/models/@interfaces';
import * as EmployeeAction from 'src/app/@core/@store';
import { Observable } from 'rxjs';
import { employeesIsLoadingSelector } from 'src/app/@core/@store';
@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.scss'],
})
export class EmployeeLayoutComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<AppStateInterface>) {
    // select loading from state by loadingSelector
    this.isLoading$ = this.store.pipe(select(employeesIsLoadingSelector));
  }

  ngOnInit(): void {
    // dispatch event to get Employees from backend
    this.store.dispatch(EmployeeAction.getAllEmployees());
  }
}
