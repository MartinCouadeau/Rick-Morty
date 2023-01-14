import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styles from './Detail.module.css'

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
        <div className={styles.divPrincipal}>
          <div className={styles.divDatos}>
            <Link to = {"/"}><button>Home</button></Link>
            <h1>Nombre: {character.name ? character.name : ""}</h1>
            <br></br>
            <h3>Status: {character.status ? character.status : ""}</h3>
            <br></br>
            <h3>Specie: {character.species ? character.species : ""}</h3> 
            <br></br>
            <h3>Gender: {character.gender ? character.gender : ""}</h3> 
            <br></br>
            <h3>Origin: {character.origin ? character.origin.name : ""}</h3>
          </div>
          <div>
            <img className={styles.foto} src={character.image ? character.image : ""} alt="" />
          </div>
            
        </div>
    )
}