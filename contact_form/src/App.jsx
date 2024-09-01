import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Cover from './components/Cover/Cover'
import Form from './components/Form/Form'

function App() {
  return <div>
    <Navigation />
    <main className='main_container'>
      <Cover />
      <Form />
    </main>
  </div>
}

export default App
