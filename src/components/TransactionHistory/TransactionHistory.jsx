import React, { Component } from 'react';
import styles from './TransactionHistory.module.scss';

class TransactionHistory extends Component {
  render() {
    const { items } = this.props;

    return (
      <table className={styles['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TransactionHistory;
