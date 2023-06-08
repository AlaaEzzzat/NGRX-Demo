import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private __http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.__http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
