import React from 'react';

// import mobileBg from '../../assets/bg-main-mobile.png';

import styles from './Header.module.css';

function Header(props) {
  const { name, number, expMonth, expYear } = props;
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.innerCardContainer}>
          <div className={styles.cardBack} />
          <div className={styles.cardFront}>
            <p>{name ? name : 'Jane Appleseed'}</p>
            <div className={styles.cardNumber}>
              {Array.from(number).map((val, index) => {
                return <p key={index}>{val.length !== 0 ? val : '0'}</p>;
              })}
            </div>
            <div>
              {Array.from(expMonth).map((val, index) => {
                console.log(expMonth, val);
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
  );
}

export default Header;
