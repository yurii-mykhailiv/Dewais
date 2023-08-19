import Form from './components/Form/Form';
import { useAppSelector } from '../../shared/hooks/hooks';
import { statusSelector } from '../../store/selectors';
import EmptyState from '../../shared/components/EmptyState/EmptyState';
import { ReactComponent as UserEmptyState } from '../../shared/assets/UserEmptyState.svg';
import UserCard from './components/UserCard/UserCard';
import Spinner from '../../shared/components/Spinner/Spinner';
import styles from "./style.module.scss";

const UserPage = () => {
  const status = useAppSelector(statusSelector);

  const handleRenderUserComponents = () => {
    switch (status) {
      case 'fulfilled':
        return <UserCard />;
      case 'pending':
        return <Spinner />;
      case 'rejected':
        return (
          <EmptyState
            title="No Github Users found!"
            subTitle="Please enter valid Github username"
            icon={<UserEmptyState width={50} height={50} />}
          />
        );
      default:
        return <div className={styles.message}>Please enter User name.</div>
    }
  };

  return (
    <div>
      <Form />
      {handleRenderUserComponents()}
    </div>
  );
};

export default UserPage;
