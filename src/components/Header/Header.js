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
          <div className={styles.cardFront}>
            <div>
              fy x<p>{name ? name : 'Jane Appleseed'}</p>
              <div className={styles.cardNumber}>
                {number ? number : '0000 0000 000 000'}
              </div>
              <div>
                {Array.from(expMonth).map((val, index) => {
                  return <p key={index}>{val ? val : '0'}</p>;
                })}
              </div>
              <div>
                <p>{expYear ? expYear : '00'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
