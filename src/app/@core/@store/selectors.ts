import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../models/@interfaces';

export const selectFeature = (state: AppStateInterface) => state.posts;
// create loading selector
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

// create posts selector
export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts
);
// create error selector
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
