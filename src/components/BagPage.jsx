import SideTag from "./SideTag";
import s from "./BagPage.module.css"
import { useSelector } from "react-redux";
import mtBag from "../Images/emptyBag.png"
import { Link } from "react-router-dom";
import BagItem from "./BagItem.jsx"
function BagPage() {
    let bagList = useSelector((state) => state.bagProducts.list);
    let totalMRP = 0;
    let totalAmount = 0;
    let totalDiscount = 0;
    for (const item of bagList) {
        totalAmount += Number(item.price);
        totalMRP += (Number(item.price) / (1 - Number(item.discountPercentage) / 100));
        totalDiscount += (Number(item.price) / (1 - Number(item.discountPercentage) / 100)) - Number(item.price);
    }
    totalDiscount = totalDiscount.toFixed(2)
    return <><div>
        {!bagList.length && <div className={s.emptyBagContainer}>
            <div className={s.bagContentContainer}>
                <img src={mtBag} />
                <div className={s.b1}>Hey, it feels so light!</div>
                <div className={s.b2}>There is nothing in your bag. Let's add some items.</div>
                <div className={s.b3}><Link to={"/EthnicSarees"}><button className={s.bagButton}>ADD ITEMS FROM STORE</button></Link></div>

            </div>
        </div>}
        {bagList.length && <div className={s.bagItemMainContainer}>
            <div className={s.bagItemContainer}>
                {bagList.map((item) => (<BagItem key={item.id} itemObj={item}></BagItem>))}
            </div>
            <div className={s.receiptContainer}>
                <div className={s.secondReceiptContainer}>
                    <div className={s.receiptTitle}>PRICE DETAILS ({bagList.length} items)</div>
                    <div className={s.mrp}><span>TOTAL MRP</span><span>RS. {(totalMRP).toFixed(2)}</span></div>
                    <div className={s.finalDiscount}><span>TOTAL DISCOUNT</span><span style={{ color: "green" }}>-RS. {totalDiscount}</span></div>
                    <div className={s.couponOffer}><span>COUPON DISCOUNT</span><span style={{ color: "#FF3F6C" }}>APPLY COUPON</span></div>
                    <div className={s.platformFee}><span>PLATFORM FEE</span><span>RS. 23</span></div>
                    <div className={s.totalAmount}><span>TOTAL AMOUNT</span><span>RS. {totalAmount.toFixed(2)}</span></div>
                    <div className={s.policyAcceptence}>By placing the order, you agree to Myntra's <span style={{ color: "#FF3F6C", fontWeight: "700" }}>Terms of Use</span> and <span style={{ color: "#FF3F6C", fontWeight: "700" }}>Privacy Policy</span></div>
                    <button className={s.placeOrder}>Place Order</button>

                </div>
            </div>
        </div>}

        <SideTag></SideTag>
        {bagList.length && <div className={s.b3}><Link to={"/EthnicSarees"}><button className={s.bagButton}>ADD ITEMS FROM STORE</button></Link></div>}
    </div></>;
}
export default BagPage;