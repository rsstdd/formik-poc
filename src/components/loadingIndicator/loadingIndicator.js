// File Name: components/Loading.jsx
// Description: Loading Spinner
// Used by: All Forms
// Dependencies:
// ------------------------------------------------------------

import React from 'react'

import './loading.scss'

const Loading = () => (
  <svg
    className="spinner"
    height="65"
    viewBox="0 0 66 66"
    width="65"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="path"
      cx="33"
      cy="33"
      fill="none"
      r="30"
      strokeLinecap="round"
      strokeWidth="6"
    />
  </svg>
)

export default Loading
