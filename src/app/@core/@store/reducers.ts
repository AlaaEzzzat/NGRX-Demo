import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './actions';
import { PostsStateInterface } from '../models/@interfaces';

// Create initial state
export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

// Create reducer and pass initial state to it
export const reducers = createReducer(
  initialState,
  // while fetching posts start loading
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  // if posts are fetched successfully stop loading and update posts the state with the result
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  // if posts are fetched successfully stop loading and update error in  the state with the result
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
