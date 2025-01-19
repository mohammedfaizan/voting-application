import { useState } from 'react'
import './App.css'
import apple from './assets/apple.png'
import watermelon from './assets/watermelon.png'
import cherry from './assets/cherry1.webp'


function App() {
  

  return (
    <div className='container'>
      <Apple/>
      <Watermelon/>
      <Cherry/>
    </div>
  )
}

export default App


function Apple() {
  const [count, setCount] = useState(0)
  return (
    <div className='apple'>
      <img className='apple-img' src={apple} alt="" />
      <h3>Apple</h3>
      <button onClick={() => setCount(count + 1)}>Vote</button>
      <p>Count is {count}</p>
    </div>
  )
}

function Watermelon() {
  const [count, setCount] = useState(0)
  return (
    <div className='watermelon'>
      <img className='watermelon-img' src={watermelon} alt="" />
      <h3>Water Melon</h3>
      <button onClick={() => setCount(count + 1)}>Vote</button>
      <p>Count is {count}</p>
    </div>
  )
}

function Cherry() {
  const [count, setCount] = useState(0)
  return (
    <div className='cherry'>
      <img className='cherry-img' src={cherry} alt="" />
      <h3>Cherry</h3>
      <button onClick={() => setCount(count + 1)}>Vote</button>
      <p>Count is {count}</p>
    </div>
  )
}