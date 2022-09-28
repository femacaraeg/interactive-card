import React from 'react';

import styles from './Form.module.css';

function Form() {
  return (
    <div className={styles.formBox}>
      <form>
        <label>
          CARDHOLDER NAME
          <input type='text' name='name' placeholder='e.g. Jane Appleseed' />
        </label>
        <label>
          CARD NUMBER
          <input
            type='text'
            name='number'
            placeholder='e.g. 1234 5678 9123 0000'
          />
        </label>
        <div className={styles.date}>
          <label>
            EXP. DATE (MM/YY)
            <div className={styles.flexDiv}>
              <input type='number' placeholder='MM' name='month' />
              <input type='number' placeholder='YY' name='year' />
            </div>
          </label>
          <label>
            CVC
            <input type='number' placeholder='e.g. 123' name='cvc' />
          </label>
        </div>
        <button type='submit' className={styles.confirmBtn}>
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
