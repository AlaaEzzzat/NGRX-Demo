import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/@core/models/@interfaces/iEmployee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: IEmployee = {} as IEmployee;
  currEmployeeId: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currEmployeeId = paramMap.get('id') ? Number(paramMap.get('id')) : 0;
    });
  }

  ngOnInit(): void {}
}
