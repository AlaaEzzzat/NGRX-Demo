import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../models/@interfaces';
export const selectPostsFeature = (state: AppStateInterface) => state.posts;
// create loading selector
export const isLoadingSelector = createSelector(
  selectPostsFeature,
  (state) => state.isLoading
);

// create posts selector
export const postsSelector = createSelector(
  selectPostsFeature,
  (state) => state.posts
);
// create error selector
export const errorSelector = createSelector(
  selectPostsFeature,
  (state) => state.error
);
