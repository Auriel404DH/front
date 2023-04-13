import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignUpSignIn.module.scss';
import wolf_5 from '../assets/wolf_5.png';
import wolf_6 from '../assets/wolf_6.png';
import { useAppDispatch } from '../hooks';
import { loginUser } from '../redux/slices/auth';
import { signIn } from '../api/Sign';
import { navigateTo } from '../models';

type IForm = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signInFunc = async (form: IForm) => {
    const data = await signIn(form);

    if (data.ok && data.data) {
      dispatch(loginUser(data.data));
      navigate(navigateTo.NEWS);
      localStorage.setItem('auth', 'auth');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: 'chetoshnikov7672222@gmail.com',
      password: 'Gwen2003Love',
    },
    onSubmit: signInFunc,
  });

  return (
    <>
      <div className={styles.title}>Sign In</div>
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
              name="password"
              type="password"
              id="password"
              className={styles.inputForm}
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button className={styles.formButton} type="submit">
            Sign IN!
          </button>
        </form>

        <img className={styles.wolf_four} src={wolf_5} alt="wolf" />
        <img className={styles.wolf_third} src={wolf_6} alt="wolf" />
      </div>
    </>
  );
};

export default SignIn;
