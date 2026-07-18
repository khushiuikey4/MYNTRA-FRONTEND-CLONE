import s from "./GridSection.module.css"
import gPlay from "../Images/gPlay.png"
import appStore from "../Images/appStore.png"
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import originalSeal from "../Images/originalSeal.png"
import twoWayIcon from "../Images/twoWayIcon.png"



function GridSection() {
    return <div className={s.gridContainer}>
        <div className={s.gridCell}>
            <a href="#" className={s.title}>ONLINE SHOPPING</a>
            <a href="#" className={s.elem}>Men</a>
            <a href="#" className={s.elem}>Women</a>
            <a href="#" className={s.elem}>Kids</a>
            <a href="#" className={s.elem}>Home</a>
            <a href="#" className={s.elem}>Beauty</a>
            <a href="#" className={s.elem}>Genz</a>
            <a href="#" className={s.elem}>Gift Cards</a>
            <a href="#" className={s.elem}>Myntra Insider</a>
            <a href="#" className={s.title}>USEFUL LINKS</a>
            <a href="#" className={s.elem}>Blog</a>
            <a href="#" className={s.elem}>Careers</a>
            <a href="#" className={s.elem}>Site Map</a>
            <a href="#" className={s.elem}>Corporate Information</a>
            <a href="#" className={s.elem}>Whitehat</a>
            <a href="#" className={s.elem}>Genz</a>
            <a href="#" className={s.elem}>Cleartrip</a>
            <a href="#" className={s.elem}>Myntra Global</a>
        </div>
        <div className={s.gridCell}>
            <a href="#" className={s.title}>CUSTOMER POLICIES</a>
            <a href="#" className={s.elem}>Contact Us</a>
            <a href="#" className={s.elem}>FAQ</a>
            <a href="#" className={s.elem}>T & C</a>
            <a href="#" className={s.elem}>Terms Of Use</a>
            <a href="#" className={s.elem}>Track Orders</a>
            <a href="#" className={s.elem}>Shipping</a>
            <a href="#" className={s.elem}>Cancellation</a>
            <a href="#" className={s.elem}>Privacy policy</a>
            <a href="#" className={s.elem}>Grievance Redressal</a>
            <a href="#" className={s.elem}>FSSAI Food Safety Connect app</a>
        </div>
        <div className={s.sourceImageIconContainer} className={s.gridCell}>
            <a href="#" className={s.title}>EXPERIENCE MYNTRA APP ON MOBILE</a>
            <a href="#" className={s.elem}><div className={s.flexContainer}><img className={s.playSourceImg} src={gPlay} /><img src={appStore} className={s.appSourceImg} /></div></a>
            <a href="#" className={s.title}>KEEP IN TOUCH</a>
            <div className={s.flexContainer}>
                <AiFillFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />

            </div>
        </div>
        <div className={s.gridCell}>
            <div className={s.guaranteeBox}>
                <div className={s.sealImage}><img src={originalSeal} /></div>
                <div className={s.guaranteeText}>
                    <span className={s.highlight}>100% ORIGINAL</span>guarantee for all products at myntra.com
                </div>
            </div>

            <div className={s.guaranteeBox}>
                <div className={s.twoWayImage}><img src={twoWayIcon} /></div>
                <div className={s.guaranteeText}>
                    <span className={s.highlight}>Return within 14 days</span> of receiving your order
                </div>
            </div>
        </div>
    </div>;
}
export default GridSection;











