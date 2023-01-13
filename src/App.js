import './App.css'
import {useState} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import characters from './data.js'


function App () {



  const [characters, setCharacters] = useState([])

  const onClose = (id) => {
    setCharacters(
      characters.filter(
        character =>character.id !== id
    ))
  }


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <br/>
      <br/>
      <div>
        <Cards 
          onClose={onClose} 
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
