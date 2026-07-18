import Action from "./Action.jsx";
import styles from "./Header.module.css";
import Logo from "./Logo.jsx"
import MidHeaderSection from "./MidHeaderSection.jsx";
function Header({ categoryHover, setCategoryHover, categoryListHover, setCategoryListHover, categoryIndex, setCategoryIndex }) {
    return <>
        <header>
            <div className={styles.header}>
                <Logo></Logo>
                <MidHeaderSection categoryHover={categoryHover} setCategoryHover={setCategoryHover} categoryListHover={categoryListHover} setCategoryListHover={setCategoryListHover} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} ></MidHeaderSection>
                <Action></Action>
            </div>
        </header>
    </>
}
export default Header;