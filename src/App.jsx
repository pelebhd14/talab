import { useState } from 'react'
import './App.css'
import OpeningPage from './components/openingPage/openingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OpeningPage />
    </>
  )
}

export default App
