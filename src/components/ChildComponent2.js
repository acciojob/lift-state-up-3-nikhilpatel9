import React from 'react'

export default function ChildComponent2({selectedOption, submitOption}) {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={() => submitOption('Option 2')}>Option 2</button>
    </div>
  )
}
