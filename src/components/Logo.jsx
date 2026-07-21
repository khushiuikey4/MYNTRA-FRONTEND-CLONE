import logo from "../Images/myntra-logo.png"
import styles from "./Logo.module.css"
import { Link } from "react-router-dom";
function Logo() {

    return <>
        <Link to="/">
            <div className={styles.logoContainer} ><img className={styles.logoImg} src={logo}></img></div>
        </Link>
    </>
}
export default Logo;