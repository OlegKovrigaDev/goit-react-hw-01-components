import React, { Component } from 'react';
import styles from './Profile.module.scss';

class Profile extends Component {
  render() {
    const { username, tag, location, avatar, stats } = this.props;
    const { followers, views, likes } = stats;

    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt={username} className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
