import React, { Component } from 'react';
import styles from './FriendListItem.module.scss';

class FriendListItem extends Component {
  render() {
    const { avatar, name, isOnline } = this.props;
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
}

export default FriendListItem;
