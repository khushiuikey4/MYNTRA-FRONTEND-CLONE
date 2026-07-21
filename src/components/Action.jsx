import styles from "./Action.module.css"
import { BsPersonFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
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
            <Link to="/Bag" className="routerLink">
                <div className={styles.bagContainer}>

                    <div className className="position-relative" >
                        <SlHandbag />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                            10
                        </span>
                    </div>

                    <p>Bag</p>
                </div>
            </Link>
        </div>
    </>
}
export default Action;