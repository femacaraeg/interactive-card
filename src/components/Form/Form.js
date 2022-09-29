import React from 'react';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

import styles from './Form.module.css';

const CardSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.number('Wrong format, numbers only').required(),
  month: Yup.number().required(`Can't be blank`),
  year: Yup.number().required(`Can't be blank`),
  cvc: Yup.number().required(`Can't be blank`),
});

function Form() {
  return (
    <div className={styles.formBox}>
      <Formik
        initialValues={{ name: '', number: '', month: '', year: '', cvc: '' }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={CardSchema}
      >
        {({ errors, touched }) => (
          <FormikForm>
            <label>CARDHOLDER NAME</label>
            <Field type='text' name='name' placeholder='e.g. Jane Appleseed' />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>
              CARD NUMBER
              <Field
                type='text'
                name='number'
                placeholder='e.g. 1234 5678 9123 0000'
              />
            </label>
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}

            <div className={styles.date}>
              <label>
                EXP. DATE (MM/YY)
                <div className={styles.flexDiv}>
                  <div>
                    <Field type='number' placeholder='MM' name='month' />
                    {errors.month && touched.month ? (
                      <div>{errors.month}</div>
                    ) : null}
                  </div>
                  <div>
                    <Field type='number' placeholder='YY' name='year' />
                    {errors.year && touched.year ? (
                      <div>{errors.year}</div>
                    ) : null}
                  </div>
                </div>
              </label>
              <label>
                CVC
                <div>
                  <Field type='number' placeholder='e.g. 123' name='cvc' />
                  {errors.cvc && touched.cvc ? <div>{errors.cvc}</div> : null}
                </div>
              </label>
            </div>
            <button type='submit' className={styles.confirmBtn}>
              Confirm
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

export default Form;
