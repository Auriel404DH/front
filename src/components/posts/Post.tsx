import React from 'react';
import styles from '../../styles/Post.module.scss';
import { IPost, IPostArr } from '../../models/api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deletePost } from '../../api/Posts';
import { deleteUserPost } from '../../redux/slices/post';

type IProps = {
  post: IPostArr;
};

const Post: React.FC<IProps> = ({ post }) => {
  const authorPostId = post.user._id;
  const dispatch = useAppDispatch();
  const ourId = useAppSelector((state) => state.auth.user._id);

  const deletePostFunc = async () => {
    const data = await deletePost({ id: post._id });

    if (data.ok) {
      dispatch(deleteUserPost(post._id));
    }
  };

  return (
    <div className={styles.post}>
      <div className={styles.postTitle}>{post.title}</div>
      <div className={styles.postContent}>
        <div>{post.text}</div>
        <div>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.authorBlock}>
          <div>{post.user.email}</div>
          <div className={styles.postUser}>
            <span>{post.user.fullName}</span>
          </div>
        </div>
      </div>
      {authorPostId === ourId && (
        <div onClick={deletePostFunc} className={styles.postIcon}>
          x
        </div>
      )}
    </div>
  );
};

export default Post;
