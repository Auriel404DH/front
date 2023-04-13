import styles from '../../styles/Profile.module.scss';
import wolf from '../../assets/wolf_2.png';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { navigateTo } from '../../models';

const ProfileCard = () => {
  const { user } = useAppSelector(({ auth }) => auth);
  const navigate = useNavigate();

  const navigateToProfile = () => navigate(navigateTo.PROFILE);

  return (
    <div onClick={navigateToProfile} className={styles.card}>
      <img className={styles.avatar} alt={wolf} src={user.avatarUrl} />
      <div className={styles.cardContent}>
        <div>{user.fullName}</div>
        <span>{user.email}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
