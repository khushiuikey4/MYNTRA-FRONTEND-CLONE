import { useState } from "react";
import s from "./SideTag.module.css"
import { RiPlayReverseFill } from "react-icons/ri";
import { IoIosPlay } from "react-icons/io";
import offerCardIamge from "../Images/offerImg.png"
import offerBtm from "../Images/offerBottom.png"


function SideTag() {
    let [sideTagOpen, setSideTagOpen] = useState(false);
    let openSideDrawer = () => {
        setSideTagOpen(true);
    }
    let closeSideDrawer = () => {
        setSideTagOpen(false);
    }
    return <>
        {sideTagOpen && <div className={s.sideDrawer}>
            <div className={s.sideTagContainerInDrawer}>
                <div className={s.shrinkIcon} onClick={() => { closeSideDrawer() }}>
                    <IoIosPlay />
                </div>
                <div className={s.offer}>
                    UPTO ₹200 OFF
                </div>

            </div>
            <div className={s.offerCard}>
                <img className={s.offerImage} src={offerCardIamge} />
                <div className={s.offerCardInfoContainer}>
                    <div className={s.couponInfo}>
                        <div className={s.couponCode}>Coupon Code : MYNTRA300</div>
                        <div className={s.couponText}>Applicable on your first order</div>
                    </div>
                    <div className={s.buttonInfo}></div>

                    <button className={s.couponButton}>SIGN UP NOW</button>
                </div>
                <img src={offerBtm} className={s.offerBottomImage} />
            </div>
        </div>}
        <div className={s.sideTagContainer}>
            <div className={s.expandIcon} onClick={() => { openSideDrawer() }}>
                <RiPlayReverseFill />
            </div>
            <div className={s.offer}>
                UPTO ₹200 OFF
            </div>

        </div></>;
}
export default SideTag;