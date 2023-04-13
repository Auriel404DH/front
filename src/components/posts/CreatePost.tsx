import { useFormik } from 'formik';
import { IPost } from '../../models/api';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../api/Posts';
import styles from '../../styles/Post.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { navigateTo } from '../../models';
import { createLastPost } from '../../redux/slices/post';

const CreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => state.auth.user._id);

  const createUserPost = async (form: IPost) => {
    const data = await createPost({ ...form });

    if (data.ok && data.post) {
      dispatch(createLastPost(data.post));
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      imageUrl: '',
      tags: '',
      userId,
    },
    onSubmit: createUserPost,
  });
  return (
    <div className={styles.createPost}>
      <span className={styles.formTitle}>Create ur Post!</span>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            name="title"
            id="title"
            className={styles.inputForm}
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.inputTextWrapper}>
          <input
            name="text"
            id="text"
            className={styles.inputForm}
            placeholder="Text"
            value={formik.values.text}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            name="imageUrl"
            id="imageUrl"
            className={styles.inputForm}
            placeholder="Image url"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            name="tags"
            id="tags"
            className={styles.inputForm}
            placeholder="tags"
            value={formik.values.tags}
            onChange={formik.handleChange}
          />
        </div>
        <button className={styles.formButton} type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
