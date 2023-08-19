import { useAppSelector } from '../../../../shared/hooks/hooks';
import { userSelector } from '../../../../store/selectors';
import styles from './styles.module.scss';

const UserCard = () => {
  const user = useAppSelector(userSelector);

  return (
    <div className={styles.userCard}>
      <div className={styles.mainSection}>
        <img src={user?.avatar_url} alt="avatar" className={styles.avatar} />
        <div className={styles.userName}>{user?.name}</div>
      </div>
      <div className={styles.secondSection}>
        <a href={user?.url} target="_blank" rel="noopener noreferrer" className={styles.userLink}>
          Link for User profile
        </a>
        <div className={styles.bio}>
          {user?.bio || "The user didn't fill the bio field"}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
