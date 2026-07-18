import s from "./Studio.module.css"
import { TbDeviceTvOld } from "react-icons/tb";
import std from "../Images/Studio.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Studio({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className={s.studioDropDownContainer} onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>

        <div className={s.title}>
            <span className={s.tvIcon}><TbDeviceTvOld /></span>
            <span className={s.studioTitle}>Studio</span>
        </div>
        <div className={s.studioTextContainer}>
            <div className={s.studioText}>Your daily inspiration for everything</div>
            <div className={s.studioText}>faishon</div>

        </div>

        <div>
            <img className={s.studioImage} src={std} />
        </div>
        <div className={s.studioButtonContainer}>
            <button className={s.exploreStudio}>EXPLORE STUDIO<span className={s.studioRightIcon}><MdOutlineKeyboardArrowRight />
            </span></button>
        </div>
    </div>;
}
export default Studio;