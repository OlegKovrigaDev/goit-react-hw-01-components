import React, { Component } from 'react';
import styles from './FriendList.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';

class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <ul className={styles['friend-list']}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  }
}

export default FriendList;
