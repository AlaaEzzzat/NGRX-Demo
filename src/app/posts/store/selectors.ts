import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/models/@interfaces/appState.interface';

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
