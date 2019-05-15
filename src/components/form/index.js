import React from 'react'
import {Formik} from 'formik'
import PropTypes from 'prop-types'
import DisplayFormikState from './helper'
import emailValidation from './validations/email'

const Form = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
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
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="control">
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

              <button
                type="button"
                className="button is-medium is-block is-info"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button
                className="button is-medium is-block is-info"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>

              <DisplayFormikState {...props} />
            </form>
          </div>
        )
      }}
    </Formik>
  )
}

export default Form
