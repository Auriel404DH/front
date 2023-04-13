import { Routes, Route } from 'react-router-dom';
import { navigateTo } from './models';
import { News, Profile, SignIn, SignUp } from './pages';
import Header from './components/header';
import styles from './styles/App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path={navigateTo.NEWS} element={<News />} />
          <Route path={navigateTo.PROFILE} element={<Profile />} />
          <Route path={navigateTo.SIGN_IN} element={<SignIn />} />
          <Route path={navigateTo.SIGN_UP} element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
