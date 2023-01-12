import Card from "../Card/Card";
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className={styles.divPrincipal}>
            {
               //characters.map((character) => {
                  //return 
                  <Card  
                     name={characters.name}
                     species={characters.species}
                     gender={characters.gender}
                     image={characters.image}
                     onClose={() => window.alert('Emulamos que se cierra la card')}/>
               //})
            }
          </div>;
}
