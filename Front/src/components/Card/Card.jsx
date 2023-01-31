import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, deleteFavorites} from "../../redux/actions"


export default function Card(props) {

   const [isFav, setisFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((estado) => estado.myFavorites)

   useEffect(() => {
      myFavorites.forEach((char) => {
         if (char.id === props.id) {
            setisFav(true);
         }
      });
   }, [myFavorites]);


   function handleFavorite(char) {
      if (isFav) {
         setisFav(false)
         dispatch(deleteFavorites(char.id))
      } else {
         setisFav(true)
         dispatch(addFavorites(char))
      }
   }

   return (
      <div className={styles.divPrincipal}>
         <button className={styles.closeButton} onClick={(props.onClose, () => handleFavorite(props))}>X</button>
         {
            isFav ? (
               <button onClick={() => handleFavorite(props)}>❤️</button>
            ) : (
               <button onClick={() => handleFavorite(props)}>🤍</button>
            )
         }
         <img className={styles.charImage} src={props.image} alt="" />
         <Link to= {`/detail/${props.id}`}><h2 className={styles.charName}>{props.name}</h2></Link>
         <div className={styles.divUnder}>
            <h2 className={styles.charGender}>{props.gender}</h2>
            <h2 className={styles.charSpecie}>{props.species}</h2>
         </div>
      </div>
   );
}
