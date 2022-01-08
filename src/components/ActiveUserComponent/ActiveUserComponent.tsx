import React from 'react';
import { User } from '../../interfaces/user.interface';
import styles from './ActiveUserComponent.module.css';

export const ActiveUser = () => {
  const activeUser: User = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className={styles['wrapper']}>
      <div className={styles['activeUser']}>
        <h3 className={styles['user-info']}>You: {activeUser.name}</h3>
        <h4 className={styles['user-info']}>Email: {activeUser.email}</h4>
      </div>
    </div>
  );
};
