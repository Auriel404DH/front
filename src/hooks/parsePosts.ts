import { IPost, IPostArr } from '../models/api';

export const parsePosts = (posts: IPostArr[]) => {
  return posts.map((post) => {
    const postTags = post.tags.join()

    return { ...post, tags: postTags };
  });
};
