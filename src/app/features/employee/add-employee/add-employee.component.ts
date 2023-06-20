import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { IEmployee } from 'src/app/@core/models/@interfaces';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  @Input()
  allEmployee!: IEmployee[];
  empolyee: IEmployee = {} as IEmployee;
  method: string = 'Add';
  inputs: any = ['name', 'age', 'birthOfDate', 'address'];
  EmployeeForm: FormGroup;
  currEmployeeId: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currEmployeeId = paramMap.get('id') ? Number(paramMap.get('id')) : 0;
    });
    this.EmployeeForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required]],
      birthOfDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  get f() {
    return this.EmployeeForm.controls;
  }
  get name() {
    return this.EmployeeForm.get('name');
  }
  get age() {
    return this.EmployeeForm.get('age');
  }
  get birthOfDate() {
    return this.EmployeeForm.get('birthOfDate');
  }
  get address() {
    return this.EmployeeForm.get('address');
  }
  addEmployeeData() {
    console.log(this.EmployeeForm.value);
    this.empolyee = this.EmployeeForm.value;
    this.empolyee.birthOfDate = new Date(this.empolyee.birthOfDate);

    this.method == 'Add' ? this.addEmployee() : this.updateEmployee();
  }
  addEmployee() {}
  updateEmployee() {}
  ngOnInit(): void {
    if (this.currEmployeeId != 0) {
      this.method = 'Update';
      // this.employeeService.getEmployeeById(this.currEmployeeId).subscribe({
      //   next: (data: any) => {
      //     this.toaster.info('Founded!');
      //     console.log(data);
      //     this.empolyee = data;
      //     this.EmployeeForm.patchValue(this.empolyee)
      //   },
      //   error: (err: any) => {
      //     this.location.back();
      //     this.toaster.error('Not Exist!');
      //   },
      // });
    }
  }
}
