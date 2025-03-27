import { React } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/container/ItemListContainer'

function App() {

  return (
      <div>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
      </div>
  )
}

export default App
