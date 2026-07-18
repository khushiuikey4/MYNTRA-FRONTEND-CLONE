import logo from "../Images/myntra-logo.png"
import styles from "./Logo.module.css"
function Logo() {
    return <>
        <div className={styles.logoContainer} ><img className={styles.logoImg} src={logo}></img></div>
    </>
}
export default Logo;