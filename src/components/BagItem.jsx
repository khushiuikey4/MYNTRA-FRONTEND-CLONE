import s from "./BagItem.module.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Store/productSlice";


function BagItem({ itemObj }) {
    let dispatch = useDispatch();
    let removeBagItem = (itemObj) => {
        dispatch(removeItem(itemObj));
    }
    return <div className={s.bagItemLayout}>
        <div className={s.removeItemIcon} onClick={() => (removeBagItem(itemObj))}><RxCross2 />
        </div>
        <div className={s.bagItemImage}><img src={itemObj.thumbnail} /></div>
        <div className={s.bagItemInfo}>
            <div className={s.bagItemBrand}>{itemObj.brand}</div>
            <div className={s.bagItemTitle}>{itemObj.title}</div>
            <div className={s.bagItemDescription}>{itemObj.description}</div>
            <div>
                <span className={s.bagItemSize}>M <IoMdArrowDropdown />
                </span>
                <span className={s.bagItemQuantity}>1 <IoMdArrowDropdown />
                </span>
                <span className={s.bagItemStock}>{itemObj.stock} Left</span>
            </div>
            <div>
                <span className={s.finalPrice}>Rs. {itemObj.price}</span>
                <span className={s.originalPrice}>Rs. {(itemObj.price / (1 - itemObj.discountPercentage / 100)).toFixed(1)}</span>
                <span className={s.Discount}>{itemObj.discountPercentage}%OFF</span>
            </div>
            <div className={s.policy}>Not Returnable</div>
        </div>
    </div>;
}
export default BagItem;