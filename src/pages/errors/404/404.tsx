import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants/routes';
import styles from './styles.module.css';

type Error404Props = {
  description?: string;
};

function Error404({ description }: Error404Props): JSX.Element {
  return (
    <div className={`page ${styles.errorPage}`}>
      <div className={styles.errorBlock}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>{description ?? 'Not found'}</h2>
      </div>
      <Link to={APP_ROUTES.MAIN} className={styles.linkMain}>
        Main page
      </Link>
    </div>
  );
}

export default Error404;
