import './App.css'
import React, {useState} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import characters from './data.js'


function App () {

  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };

  const [personajes, setPersonajes] = useState({
    personajesArr:[]
  })


  const onSearch = () => {
    setPersonajes({
      ...personajes,
      personajesArr:example
    })
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <br/>
      <br/>
      <div>
        <Cards characters={example}/>
      </div>
    </div>
  )
}

export default App
