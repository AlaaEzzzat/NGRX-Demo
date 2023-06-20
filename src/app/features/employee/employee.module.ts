import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from 'src/app/@core/@store/effects/employees_effects';
import { EmployeesService } from 'src/app/@core/@services';
import { employeesReducers } from 'src/app/@core/@store';

const routes: Routes = [
  {
    path: '',
    component: EmployeeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AllEmployeeComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: 'add/:id', component: AddEmployeeComponent },
      { path: 'details/:id', component: EmployeeDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    EmployeeLayoutComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    AllEmployeeComponent,
    EmployeeCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('employees', employeesReducers),
    EffectsModule.forFeature([EmployeesEffects]),
  ],
  providers: [EmployeesService],
  exports: [],
})
export class EmployeeModule {}
