import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/@interfaces';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  getAllEmployees(): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/Employees`);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/Employees/${id}`);
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(
      `${environment.baseUrl}/Employees`,
      employee
    );
  }
  updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.patch<IEmployee>(
      `${environment.baseUrl}/Employees/${employee.id}`,
      employee
    );
  }
  deleteEmployee(id: number): Observable<IEmployee> {
    return this.httpClient.delete<IEmployee>(
      `${environment.baseUrl}/Employees/${id}`
    );
  }
}
