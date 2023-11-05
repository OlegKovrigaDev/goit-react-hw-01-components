import React, { Component } from 'react';
import styles from './Statistics.module.scss';

class Statistics extends Component {
  render() {
    const { title, stats } = this.props;

    return (
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title ? title : 'Upload stats'}</h2>

        <ul className={styles['stat-list']}>
          {stats.map(item => (
            <li className={styles.item} key={item.id}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Statistics;
