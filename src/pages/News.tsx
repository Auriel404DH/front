import React from 'react';
import { getPosts } from '../api/Posts';
import { useAppDispatch, useAppSelector } from '../hooks';
import styles from '../styles/Profile.module.scss';
import { loadPosts } from '../redux/slices/post';
import Wolf_2 from '../assets/wolf_2.png';
import Wolf_6 from '../assets/wolf_6.png';
import { IPost, IPostArr } from '../models/api';
import Post from '../components/posts/Post';
import NoPosts from '../components/posts/NoPosts';
// import { parsePosts } from '../hooks/parsePosts';

const News = () => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector(({ post }) => post);

  const getPostsFunc = async () => {
    const data = await getPosts();

    if (data.ok && data.posts) {
      dispatch(loadPosts(data.posts));
    }
  };

  React.useEffect(() => {
    getPostsFunc();
  }, []);

  return (
    <div className={styles.postsBlock}>
      {posts.length === 0 && <NoPosts />}
      {posts.length > 0 && (
        <>
          {posts.map((post: IPostArr) => (
            <Post post={post} />
          ))}
        </>
      )}
      <img className={styles.wolf} src={Wolf_2} />
      <img className={styles.wolf_second} src={Wolf_6} />
    </div>
  );
};

export default News;
