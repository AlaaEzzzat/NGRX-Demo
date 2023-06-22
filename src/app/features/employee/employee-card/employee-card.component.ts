import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, props } from '@ngrx/store';
import { AppStateInterface, IEmployee } from 'src/app/@core/models/@interfaces';
import * as EmpoleeActions from 'src/app/@core/@store';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee!: IEmployee;
  @Input() page: string = '';
  @Input()
  allEmployee!: IEmployee[];
  constructor(
    private router: Router,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {}
  goToUpdate(id: number) {
    this.router.navigate(['/employee/add', id]);
  }
  deleteEmployee(id: number) {
    this.store.dispatch(EmpoleeActions.deleteEmployee({ id }));
  }
  goToDetails(id: number) {
    this.router.navigate(['/employee/details', id]);
  }
}
