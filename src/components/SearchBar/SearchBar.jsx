import styles from './SearchBar.module.css'
import {useState} from 'react';

export default function SearchBar(props) {

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }


   return (
      <div className={styles.divPrincipal}>
         <input className={styles.input} onChange={handleChange} type='search' />
         <button className={styles.button} onClick={() =>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
