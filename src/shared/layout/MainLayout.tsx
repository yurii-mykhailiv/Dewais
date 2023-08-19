import React, { ReactNode } from 'react';
import styles from './styles.module.scss'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}

export default MainLayout;