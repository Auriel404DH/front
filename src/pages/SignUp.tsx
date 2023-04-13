import { useFormik } from 'formik';
import styles from '../styles/SignUpSignIn.module.scss';
import wolf_3 from '../assets/wolf_3.png';
import { useNavigate } from 'react-router-dom';
import wolf_4 from '../assets/wolf_4.png';
import { signUp } from '../api/Sign';
import { useAppDispatch } from '../hooks';
import { addUser } from '../redux/slices/auth';
import { navigateTo } from '../models';

type IForm = {
  email: string;
  fullName: string;
  avatarUrl: string;
  password: string;
};

const DEFAULT_AVATAR_LINK =
  'https://preview.redd.it/qfs2pyxllf781.jpg?auto=webp&s=56433305b99b6df9cde046cb7a2e1843d6dfded5';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUpFunc = async (form: IForm) => {
    const data = await signUp(form);

    if (data.ok && data.data) {
      dispatch(addUser(data.data));
      navigate(navigateTo.PROFILE);
      localStorage.setItem('auth', 'auth');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      avatarUrl: DEFAULT_AVATAR_LINK,
      password: '',
    },
    onSubmit: signUpFunc,
  });

  return (
    <>
      <div className={styles.title}>Sign Up</div>
      <div className={styles.body}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              name="email"
              id="email"
              className={styles.inputForm}
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              name="fullName"
              id="fullName"
              className={styles.inputForm}
              placeholder="Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              name="avatarUrl"
              id="avatarUrl"
              className={styles.inputForm}
              placeholder="avatarUrl"
              value={formik.values.avatarUrl}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              name="password"
              id="password"
              className={styles.inputForm}
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button className={styles.formButton} type="submit">
            Sign UP!
          </button>
        </form>

        <img className={styles.wolf} src={wolf_3} alt="wolf" />
        <img className={styles.wolf_second} src={wolf_4} alt="wolf" />
      </div>
    </>
  );
};

export default SignUp;
