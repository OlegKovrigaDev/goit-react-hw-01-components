import React from 'react';
import styles from './Statistics.module.scss';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title && title}</h2>

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

export default Statistics;
