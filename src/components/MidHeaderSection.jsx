import Navigation from "./Navigation"
import SearchComponent from "./SearchComponent"
import styles from "./MidHeaderSection.module.css";
function MidHeaderSection({ categoryHover, setCategoryHover, categoryListHover, setCategoryListHover, categoryIndex, setCategoryIndex }) {
    return <div className={styles.midHead}>
        <Navigation categoryHover={categoryHover} setCategoryHover={setCategoryHover} categoryListHover={categoryListHover} setCategoryListHover={setCategoryListHover} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex}></Navigation>
        <SearchComponent></SearchComponent>
    </div>

}
export default MidHeaderSection;