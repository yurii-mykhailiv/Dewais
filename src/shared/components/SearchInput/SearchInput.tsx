import  {ChangeEvent} from 'react'
import { SearchInputProps } from './types';

import styles from './styles.module.scss'

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onInput,
  placeholder,
  label
}: SearchInputProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onInput(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput