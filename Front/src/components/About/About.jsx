import styles from './About.module.css'


export default function About(props) {
    return (
        <div className={styles.divPrincipal}>
            <div className={styles.infoPersonal}>
                <h1>Nombre: Martin Couadeau</h1>
                <h3>Mail: martin_couadeau1@hotmail.com</h3>
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                </span>
            </div>
            <div className={styles.infoProyecto}>
                <h1 className={styles.h1Proyecto}>Aplicacion de Rick & Morty</h1>
                <span>
                    Aplicacion de Rick and Morty creada en base al curso realizado en "Soy Henry" utilizando la base de datos "https://rickandmortyapi.com" donde se 
                    aplican los conocimientos adquiridos a lo largo del Modulo 2 aplicandole estilos, formato modularidad y funcionalidad a la pagina.
                </span>
            </div>
        </div>
            
    )
}