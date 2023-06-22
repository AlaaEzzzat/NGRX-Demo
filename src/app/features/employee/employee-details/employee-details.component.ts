import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/@core/models/@interfaces/iEmployee';
import * as EmployeesActions from '../../../@core/@store';
import { AppStateInterface } from 'src/app/@core/models/@interfaces';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSelectedEmployee } from '../../../@core/@store';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: IEmployee = {} as IEmployee;
  currEmployeeId: number = 0;
  employee$: Observable<IEmployee>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppStateInterface>
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currEmployeeId = paramMap.get('id') ? Number(paramMap.get('id')) : 0;
    });

    this.employee$ = this.store.pipe(select(getSelectedEmployee));
  }

  ngOnInit(): void {
    const id = this.currEmployeeId;
    this.store.dispatch(EmployeesActions.getEmployeeById({ id }));
  }
}
