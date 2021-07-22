import React from 'react'
import logo from './logo.svg'
import { useState } from 'react'

const initialUsers = () => {
  console.log('initialUsers')
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push(`user ${i}`)
  }
  return result
}
export default function Header() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([1, 2, 3])
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>hello {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      {list.map((i, index) => (
        <p key={index}>User: {i}</p>
      ))}
    </header>
  )
}
