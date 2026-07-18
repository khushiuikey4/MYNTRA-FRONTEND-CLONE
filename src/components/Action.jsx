import styles from "./Action.module.css"
import { BsPersonFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
function Action() {
    return <>
        <div className={styles.actionContainer}>
            <div className={styles.profileContainer}>
                <BsPersonFill />
                <p>Profile</p>
            </div>
            <div className={styles.favContainer}>
                <FaRegHeart />
                <p>Wishlist</p>
            </div>
            <div className={styles.bagContainer}>
                <SlHandbag />
                <p>Bag</p>
            </div>
        </div>
    </>
}
export default Action;