import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { AppStateInterface, IEmployee } from 'src/app/@core/models/@interfaces';
import { Store, select } from '@ngrx/store';
import * as EmployeesActions from '../../../@core/@store';
import { Observable } from 'rxjs';
import {
  getSelectedEmployee,
  addEmployee,
  updateEmployee,
} from 'src/app/@core/@store';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  @Input()
  allEmployee!: IEmployee[];
  method: string = 'Add';
  inputs: any = ['name', 'age', 'birthOfDate', 'address'];
  employee: IEmployee = {} as IEmployee;
  __form: FormGroup;
  currEmployeeId: number = 0;
  employee$!: Observable<IEmployee>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currEmployeeId = paramMap.get('id') ? Number(paramMap.get('id')) : 0;
    });
    this.__form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required]],
      birthOfDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
    this.employee$ = this.store.pipe(select(getSelectedEmployee));

    // this.__form.patchValue(this.employee$.subscribe());
  }

  get f() {
    return this.__form.controls;
  }
  get name() {
    return this.__form.get('name');
  }
  get age() {
    return this.__form.get('age');
  }
  get birthOfDate() {
    return this.__form.get('birthOfDate');
  }
  get address() {
    return this.__form.get('address');
  }
  addEmployeeData() {
    // console.log(this.__form.value);
    this.employee = this.__form.value;
    this.employee.birthOfDate = new Date(this.employee.birthOfDate);
    this.employee.id = this.currEmployeeId;
    // console.log(this.employee);

    this.method == 'Add' ? this.addEmployee() : this.updateEmployee();
  }
  addEmployee() {
    this.store.dispatch(addEmployee({ employee: this.employee }));
  }
  updateEmployee() {
    this.store.dispatch(updateEmployee({ employee: this.employee }));
  }
  ngOnInit(): void {
    if (this.currEmployeeId != 0) {
      this.method = 'Update';
      const id = this.currEmployeeId;
      this.store.dispatch(EmployeesActions.getEmployeeById({ id }));
      this.employee$.subscribe((data: IEmployee) => {
        this.employee = data;
        this.__form.patchValue(this.employee);
      });
    }
  }
}
