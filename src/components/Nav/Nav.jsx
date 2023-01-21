import SearchBar from "../SearchBar/SearchBar.jsx"
import About from "../About/About.jsx"
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={styles.divPrincipal}    >
            <div className={styles.divBotones}>
                <Link to={"/home"}><button className={styles.button}>Home</button></Link>
                <Link to={"/about"}><button className={styles.button}>About</button></Link> 
                <Link to={"/favorites"}><button className={styles.button}>Favorites</button></Link>
                <Link to={"/portfolio"}><button className={styles.button}>Portfolio</button></Link>
            </div>
            <nav className={styles.nav}>
                <SearchBar onSearch={props.onSearch}/>
            </nav>
        </div>
    )
}