import React, {Fragment} from 'react'
import {Formik} from 'formik'
import DisplayFormikState from './helper'
import emailValidation from './validations/email'
import LoadingIndicator from '../loadingIndicator/loadingIndicator'

const Form = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 5000)
      }}
      validate={values => emailValidation(values)}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props
        return (
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? 'input error'
                        : 'input text'
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="help is-danger">{errors.email}</div>
                  )}
                </div>
              </div>

              {isSubmitting ? (
                <LoadingIndicator />
              ) : (
                <div className={isSubmitting ? `u-display-none` : ``}>
                  <button
                    type="button"
                    className="button is-medium is-block is-info"
                    onClick={handleReset}
                    disabled={!dirty}
                  >
                    Reset
                  </button>
                  <button
                    className="button is-medium is-block is-info"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              )}
              <DisplayFormikState {...props} />
            </form>
          </div>
        )
      }}
    </Formik>
  )
}

export default Form
