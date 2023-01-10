import styles from './Card.module.css'


export default function Card(props) {
   return (
      <div className={styles.divPrincipal}>
         <button className={styles.closeButton} onClick={props.onClose}>X</button>
         <img className={styles.charImage} src={props.image} alt="" />
         <h2 className={styles.charName}>{props.name}</h2>
         <div className={styles.divUnder}>
            <h2 className={styles.charGender}>{props.gender}</h2>
            <h2 className={styles.charSpecie}>{props.species}</h2>
         </div>
         
         
      </div>
   );
}
