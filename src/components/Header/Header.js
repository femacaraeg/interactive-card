import React from 'react';

import styles from './Header.module.css';

function Header(props) {
  const { name, number, expMonth, expYear } = props;

  console.log('array number', Array.from(expMonth), number);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.innerCardContainer}>
          <div className={styles.cardBack} />
          {/* Credit Card - Front */}
          <div className={styles.cardFront}>
            <div className={styles.frontCardContainer}>
              <div className={styles.cardNumber}>
                {number ? number : '0000 0000 000 000'}
              </div>
              <div>
                {Array.from(expMonth).map((val, index) => {
                  return <p key={index}>{val ? val : '0'}</p>;
                })}
              </div>
              <div className={styles.lowerLine}>
                <p>{name ? name.toUpperCase() : 'JANE APPLESEED'}</p>
                <p>{`${expMonth ? expMonth : '00'}/${
                  expYear ? expYear : '00'
                }`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
