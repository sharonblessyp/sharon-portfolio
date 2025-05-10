import React from 'react'
import { Header } from './Components/Header/Header'
import Contacts from './Components/Contacts/Contacts'
import { Home } from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App