import React from 'react';
import styles from './Statistics.module.scss';

const getBgColor = variant => {
  switch (variant) {
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    case 'warning':
      return 'orange';
    case 'other':
      return 'gray';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

function Statistics({ title, stats }) {
  const colors = ['info', 'success', 'error', 'warning', 'other'];
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {stats.map((item, index) => (
          <li
            className={styles.item}
            style={{ backgroundColor: getBgColor(colors[index]) }}
            key={item.id}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
