import React from 'react'

export default function ChildComponent1({selectedOption, submitOption }) {
  return (
    <div>
        <h2>Child Component 1</h2>
        <button onClick={() => submitOption('Option 1')}>option 1</button>
    </div>
  )
}
