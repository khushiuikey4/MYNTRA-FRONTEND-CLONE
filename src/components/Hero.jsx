import heroImage from "../Images/hero.png"
import styles from "./Hero.module.css"

function Hero() {
    return <div >
        <img className={styles.hero} src={heroImage} />
    </div>;
}
export default Hero;