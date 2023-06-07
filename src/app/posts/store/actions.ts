import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../../models/@interfaces/post.interface';

// Create actions you need
export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: PostInterface[] }>()
);
export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{ error: string }>()
);
