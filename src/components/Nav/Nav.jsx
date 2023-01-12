import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from './Nav.module.css'

export default function Nav(props) {
    return (
        <div className={styles.divPrincipal}>
            <nav className={styles.nav}>
                <SearchBar onSearch={props.onSearch}/>
            </nav>
        </div>
    )
}