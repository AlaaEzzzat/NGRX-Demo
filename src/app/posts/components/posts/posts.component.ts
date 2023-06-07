import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/models/@interfaces/appState.interface';
import * as PostsActions from '../../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  postsSelector,
} from '../../store/selectors';
import { PostInterface } from '../../../models/@interfaces/post.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  //#region Declerations
  // observables from result
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;
  //#endregion Declerations

  //#region lifecycle methods
  constructor(private store: Store<AppStateInterface>) {
    // select loading from state by loadingSelector
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // select loading from posts by postsSelector
    this.posts$ = this.store.pipe(select(postsSelector));
    // select loading from error by errorSelector
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    // dispatch event to get posts from backend
    this.store.dispatch(PostsActions.getPosts());
  }
  //#endregion lifecycle methods
}
