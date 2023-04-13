import React from 'react';
import styles from '../styles/Profile.module.scss';
import wolf_4 from '../assets/wolf_5.png';
import { useAppSelector } from '../hooks';
import CreatePost from '../components/posts/CreatePost';

const Profile = () => {
  const { user } = useAppSelector(({ auth }) => auth);

  return (
    <>
      <div className={styles.profile}>
        <img src={user.avatarUrl} alt="wolf" />
        <div className={styles.profileInfo}>
          <span>{user.fullName}</span>
          <div>{user.email}</div>
        </div>
      </div>
      <div className={styles.profileCreate}>
        <CreatePost />
      </div>
      <img className={styles.profile__photo} src={wolf_4} />
    </>
  );
};

export default Profile;
