import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Detail(props) {

    const {detailId} = useParams()
    const [character, setCharacter] = useState("")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
    }, [detailId]);

    return (
        <div >
            <Link to = {"/"}><button>Home</button></Link>
            <h1>Nombre: {character.name ? character.name : ""}</h1>
            <h3>Status: {character.status ? character.status : ""}</h3> 
            <h3>Specie: {character.species ? character.species : ""}</h3> 
            <h3>Gender: {character.gender ? character.gender : ""}</h3> 
            <h3>Origin: {character.origin ? character.origin.name : ""}</h3> 
            <img src={character.image ? character.image : ""} alt="" />
        </div>
    )
}