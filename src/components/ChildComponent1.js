import React from 'react'

export default function ChildComponent1({selectedOption, submitOption }) {
  return (
    <div>
        <p>Child Component 1</p>
        <button onClick={() => submitOption('Option 1')}>Option 1</button>
    </div>
  )
}
