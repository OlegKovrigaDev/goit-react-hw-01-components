import React from 'react';
import styles from './FriendListItem.module.scss';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
