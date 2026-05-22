import React from 'react'

export default function ChildComponent2({selectedOption, submitOption}) {
  return (
    <div>
      <p>Child Component 2</p>
      <button onClick={() => submitOption('Option 2')}>Option 2</button>
    </div>
  )
}
