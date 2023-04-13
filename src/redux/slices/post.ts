import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost, IPostArr } from '../../models/api';

export interface PostState {
  posts: IPostArr[];
  lastCreatedPost?: IPost;
}

const initialState: PostState = {
  posts: [],
  lastCreatedPost: undefined,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<IPostArr[]>) => {
      state.posts = action.payload;
    },
    createLastPost: (state, action: PayloadAction<IPostArr>) => {
      state.posts.push(action.payload);
    },
    deleteUserPost: (state, action: PayloadAction<string>) => {
      state.posts.filter((post) => post._id !== action.payload);
    },
  },
});

export const { loadPosts, createLastPost, deleteUserPost } = postSlice.actions;

export default postSlice.reducer;
