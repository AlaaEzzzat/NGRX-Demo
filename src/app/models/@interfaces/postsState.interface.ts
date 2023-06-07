import { PostInterface } from './post.interface';
// interface for posts state
export interface PostsStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}
