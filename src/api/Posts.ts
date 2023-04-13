import { ICreatePostReturn, IGetPostsReturn, IPost } from '../models/api';
import { mainInstance } from './instance';

export const getPosts = (): Promise<IGetPostsReturn> =>
  mainInstance
    .get('/post/getAll')
    .then((data: any) => {
      return {
        ok: true,
        posts: data.data,
      };
    })
    .catch((data) => {
      return {
        ok: false,
        error: data,
      };
    });

export const createPost = (requestData: IPost): Promise<ICreatePostReturn> =>
  mainInstance
    .post('/post/create', { ...requestData, tags: requestData.tags.split(',') })
    .then((data: any) => {
      return {
        ok: true,
        post: data.post,
      };
    })
    .catch((data) => {
      return {
        ok: false,
        error: data,
      };
    });

export const deletePost = (requestData: { id: string }): Promise<ICreatePostReturn> =>
  mainInstance
    .delete('/post', requestData)
    .then(() => {
      return {
        ok: true,
      };
    })
    .catch((data) => {
      return {
        ok: false,
        error: data,
      };
    });
