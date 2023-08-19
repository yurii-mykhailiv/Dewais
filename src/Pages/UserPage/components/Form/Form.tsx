import React, { useState, FormEvent, useCallback } from 'react';
import SearchInput from '../../../../shared/components/SearchInput/SearchInput';
import Button from '../../../../shared/components/Button/Button';
import { useAppDispatch } from '../../../../shared/hooks/hooks';
import { fetchUserInfo } from '../../../../store/userSlice';

import styles from './styles.module.scss';

const Form: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleInputValue = useCallback((newValue: string): void => {
    setUserName(newValue);
  }, []);

  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      dispatch(fetchUserInfo(userName));
    },
    [dispatch, userName]
  );

  return (
    <div className={styles.searchForm}>
      <form onSubmit={handleSubmitForm}>
        <SearchInput
          value={userName}
          onInput={handleInputValue}
          placeholder="Search here"
          label="Username"
        />
        <Button type="submit" disabled={userName.length === 0}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Form;
