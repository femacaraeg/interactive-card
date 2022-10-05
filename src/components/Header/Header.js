import React from 'react';

import mobileBg from '../../assets/bg-main-mobile.png';

import styles from './Header.module.css';

function Header(props) {
  const { name, number } = props;
  return (
    <div className={styles.container}>
      <div className={styles.fill}>
        <img
          src={mobileBg}
          className={styles.mobileBg}
          alt='mobile background'
        />
        <div className={styles.cardBack} />
        <div className={styles.cardFront}>
          <p>{name ? name : 'Jane Appleseed'}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
