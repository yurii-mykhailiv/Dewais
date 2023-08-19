import { FC } from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';
import { TButtonProps } from './types';

const Button: FC<TButtonProps> = ({
  className,
  children,
  onClick,
  disabled,
  type = 'button',
  fullWidth
}) => (
  <button
    className={classNames(styles.btn, className, {
      [styles.fullWidth]: fullWidth
    })}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

export default Button;
