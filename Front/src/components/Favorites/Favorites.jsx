import React from "react";
import { isElementOfType } from "react-dom/test-utils";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css"

export default function Favorites(props) {
    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()

    

    const handleClick = (event) => {
        const { name, value} = event.target
        if (name === "filter") {
            dispatch(filterCards(value))
        }
        if (name === "order") {
            dispatch(orderCards(value))
        }
    }

    return (
        <>
            <div className={styles.divPrincipal}>
                <div>
                    <select name="filter" defaultValue="Default" onChange={handleClick}>
                        <option disabled >Select Gender</option>
                        <option value="Default" >All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderles">Genderles</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
                <div>
                    <select name="order" defaultValue="Default" onChange={handleClick}>
                        <option disabled >Select Order</option>
                        <option value="Default" >Default</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div>
            {
                myFavorites?.map((character) => {
                    return (<Card
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        gender={character.gender}
                        image={character.image}
                        onClose={() => props.onClose(character.id)}
                        id={character.id}/>
                    )
                    
                })
            }
            </div>
        </>
    )
}