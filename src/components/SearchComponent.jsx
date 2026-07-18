import styles from "./SearchComponent.module.css"
import { IoIosSearch } from "react-icons/io";

function SearchComponent() {
    return <>
        <div className={styles.searchContainer}>
            <div className={styles.searchIconContainer}>
                <IoIosSearch className={styles.searchIcon} />
            </div>
            <div className={styles.searchInputContainer}><input className={styles.searchInput} type="text" placeholder="Search for products, brands and more" /></div>
        </div>
    </>;
}
export default SearchComponent;