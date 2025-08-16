import { useState } from 'react'

import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Education from '../components/Education.jsx'
import Projects from '../components/Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Education/>
      <Projects/>
    </>
  )
}

export default App
