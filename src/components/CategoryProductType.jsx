import { useEffect, useRef, useState } from "react";
import s from "./CategoryProductType.module.css"
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Store/productSlice";

function categoryProductType({ productObj }) {

    let dispatch = useDispatch();
    let bagItemList = useSelector((state) => state.bagProducts.list);


    let handleProductAddToggle = (prodObj) => {
        if (!bagItemList.includes(prodObj)) {
            dispatch(addItem(prodObj));
        } else {
            dispatch(removeItem(prodObj));
        }
    }
    return <div className={s.productType}>
        <div className={s.imgContainer}>
            <img src={productObj.thumbnail} />
        </div>
        <div className={s.imageInfoContainer}>
            <p className={s.Brand}>{productObj.brand}</p>
            <p className={productObj.brand ? s.Title : s.Brand}>
                {productObj.title}
            </p>
            <p className={s.Finalprice}>Rs. {productObj.price}<span className={s.Price}>Rs. {(productObj.price / (1 - productObj.discountPercentage / 100)).toFixed(1)}</span><span className={s.Discount}>{`(${productObj.discountPercentage}%)`}</span></p>
            <p className={s.Title}>
                <span className={s.ratingStar}><FaStar />
                </span> {productObj.rating}
            </p>
        </div>
        <div className={s.addBagContainer}>
            <button
                className={s.addBagButton}
                style={{
                    backgroundColor: bagItemList.includes(productObj)
                        ? "#8e3b46"
                        : "#FF3F6C"
                }}
                onClick={() => handleProductAddToggle(productObj)}
            >
                {bagItemList.includes(productObj)
                    ? "Remove from Bag"
                    : "Add to Bag"}
            </button>
        </div>
    </div>
}
export default categoryProductType;