import React from 'react';
import styles from '../../styles/Header.module.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Wolf_1 from '../../assets/wolf_1.png';
import Wolf_2 from '../../assets/wolf_2.png';
import { navigateTo } from '../../models';
import { useAppSelector } from '../../hooks';
import ProfileCard from '../profile/ProfileCard';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => navigate(navigateTo.SIGN_UP);
  const navigateToSignIn = () => navigate(navigateTo.SIGN_IN);
  const navigateToNews = () => navigate(navigateTo.NEWS);

  const { isAuth } = useAppSelector(({ auth }) => auth);

  return (
    <div className={styles.header}>
      <img className={styles.logo} onClick={navigateToNews} src={logo} alt="wolf" />
      <div className={styles.name}>
        <img src={Wolf_1} alt="wolf" />
        <span>Wolf news</span>
        <img src={Wolf_2} alt="wolf" />
      </div>
      {isAuth ? (
        <ProfileCard />
      ) : (
        <div className={styles.headerLinks}>
          <button onClick={navigateToSignIn}>Sign In</button>
          <button onClick={navigateToSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Header;
