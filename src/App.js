import './App.css'
import {useState, useEffect} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"


function App () {

  const location = useLocation()
  const navigate =  useNavigate();

  const [characters, setCharacters] = useState([])

  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = 'Couadeau1';

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home")
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(
        character =>character.id !== id
    ))
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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

  const checkLocation = () => {
    if (location.pathname !== "/") {
      return <Nav onSearch={onSearch}/>
    }
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      {checkLocation()}
      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>
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
