import { IEmployee } from './iEmployee';

export interface EmployeeInterface {
  isLoading: boolean;
  employees: IEmployee[];
  error: string | null;
}
