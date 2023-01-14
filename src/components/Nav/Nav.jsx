import SearchBar from "../SearchBar/SearchBar.jsx"
import About from "../About/About.jsx"
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={styles.divPrincipal}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <nav className={styles.nav}>
                <SearchBar onSearch={props.onSearch}/>
            </nav>
        </div>
    )
}