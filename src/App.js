import './App.css'
import {useState} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import { Route, Routes } from "react-router-dom"


function App () {



  const [characters, setCharacters] = useState([])

  const onClose = (id) => {
    setCharacters(
      characters.filter(
        character =>character.id !== id
    ))
  }


  const onSearch = (id) => {
    if (!characters.some((character) => character.id === parseInt(id))) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
    }
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path="/" element={<Cards onClose={onClose} characters={characters} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
      <br/>
      <br/>
      <div>
        
      </div>
    </div>
  )
}

export default App
