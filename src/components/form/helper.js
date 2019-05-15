import React from 'react'

const DisplayFormikState = props => (
  <div style={{margin: '1rem 0'}}>
    <h3 style={{fontFamily: 'monospace'}}>Results</h3>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
)

export default DisplayFormikState
