import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import OpeningPage from './components/openingPage/openingPage.jsx'
import FormPage from './components/form/form.jsx'
import ChoicePage from './components/choice/choice.jsx'
import LearningPage from './components/learning/learning.jsx'
import TestPage from './components/test/test.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OpeningPage />} />
          <Route path="/choice" element={<ChoicePage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
