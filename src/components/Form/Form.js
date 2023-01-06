import React, { useEffect, useState } from 'react';

import valid from 'card-validator';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactInputMask from 'comigo-tech-react-input-mask';
import successIcon from '../../assets/icon-complete.svg';

import styles from './Form.module.css';

const CardSchema = Yup.object({
  name: Yup.string().required(`Can't be blank`),
  number: Yup.string()
    .test(
      'test-number',
      'Credit Card number is invalid',
      (value) => valid.number(value).isValid
    )
    .required(`Can't be blank`),
  month: Yup.string()
    .test(
      'test-month',
      'Month is Invalid',
      (value) => valid.expirationMonth(value).isValid
    )
    .required(`Can't be blank`),
  year: Yup.string()
    .test(
      'test-year',
      'Year is invalid',
      (value) => valid.expirationYear(value).isValid
    )
    .required(`Can't be blank`),
  cvc: Yup.string()
    .test('test-cvv', 'cvc is invalid', (value) => valid.cvv(value).isValid)
    .required(`Can't be blank`),
});

function Form(props) {
  const initialValues = { name: '', number: '', month: '', year: '', cvc: '' };

  const [completeState, setCompleteState] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      // alert(JSON.stringify(values, null, 2));
      setCompleteState(true);
      // show success submit
    },
    validationSchema: CardSchema,
  });

  const { errors, touched } = formik;

  const { onFormChange } = props;

  useEffect(() => {
    onFormChange(formik.values);
  }, [onFormChange, formik.values]);

  return (
    <div className={styles.formBox}>
      {completeState ? (
        <div>
          <img src={successIcon} alt='success' />
          <h1 className={styles.successHeading}>THANK YOU!</h1>
          <h3 className={styles.successDescription}>
            We've added your card details
          </h3>
          <button type='button' className={styles.confirmBtn}>
            Continue
          </button>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <label>CARDHOLDER NAME</label>
          <input
            type='text'
            name='name'
            placeholder='e.g. Jane Appleseed'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            maxLength={25}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className={styles.error}>{formik.errors.name}</p>
          ) : null}
          <label>
            CARD NUMBER
            <ReactInputMask
              mask='9999 9999 9999 9999'
              type='text'
              name='number'
              placeholder='e.g. 1234 5678 9123 0000'
              maskPlaceholder='0'
              onChange={formik.handleChange}
              value={formik.values.number}
              onBlur={formik.handleBlur}
            ></ReactInputMask>
          </label>
          {formik.errors.number && formik.touched.number ? (
            <p className={styles.error}>{formik.errors.number}</p>
          ) : null}

          <div className={styles.date}>
            <div>
              <label>EXP. DATE (MM/YY)</label>
              <div className={styles.flexDiv}>
                <div>
                  <ReactInputMask
                    mask='99'
                    maskPlaceholder='0'
                    type='text'
                    placeholder='MM'
                    name='month'
                    onChange={formik.handleChange}
                    value={formik.values.month}
                  />
                  {formik.errors.month && touched.month ? (
                    <p className={styles.error}>{errors.month}</p>
                  ) : null}
                </div>
                <div>
                  <ReactInputMask
                    mask='99'
                    maskPlaceholder='0'
                    type='text'
                    placeholder='YY'
                    name='year'
                    onChange={formik.handleChange}
                    value={formik.values.year}
                  />
                  {errors.year && touched.year ? (
                    <p className={styles.error}>{errors.year}</p>
                  ) : null}
                </div>
              </div>
              {/* <div className={styles.flexDiv}>



              </div> */}
            </div>
            <div>
              <label>CVC</label>
              <ReactInputMask
                mask='999'
                maskPlaceholder='0'
                type='text'
                placeholder='e.g. 123'
                name='cvc'
                onChange={formik.handleChange}
                value={formik.values.cvc}
                onBlur={formik.handleBlur}
              ></ReactInputMask>
              {errors.cvc && touched.cvc ? (
                <p className={styles.error}>{errors.cvc}</p>
              ) : null}
            </div>
          </div>
          <button type='submit' className={styles.confirmBtn}>
            Confirm
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
