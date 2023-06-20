import { EmployeeInterface } from './employees.interface';
import { PostsStateInterface } from './postsState.interface';
// Interface for App State
export interface AppStateInterface {
  posts: PostsStateInterface;
  employees: EmployeeInterface;
}
