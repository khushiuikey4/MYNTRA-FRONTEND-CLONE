import CategoryProductType from "./CategoryProductType";
import SideTag from "./SideTag";
import s from "./CategoryEthnicSarees.module.css"
import Loader from "./Loader.jsx"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAllItems } from "../Store/ShopItemSlice.js";

function CategoryEthnicSarees() {
    let [fetching, setFetching] = useState(true);
    // let [categoryProductList, setcategoryProductList] = useState([]);
    let dispatch = useDispatch();
    let shopItemList = useSelector((state) => state.shopProducts.shopList);

    useEffect(() => {
        if (shopItemList.length == 0) {
            fetch("https://dummyjson.com/products")
                .then((response) => response.json())
                .then((data) => {
                    // setcategoryProductList(data.products);
                    dispatch(addAllItems(data.products));
                    setFetching(false);
                })
                .catch((error) => {
                    console.log("Error fetching the product items", error);
                    setFetching(false);

                });
        } else setFetching(false);


    }, [shopItemList.length, dispatch]);




    return <>
        <div>
            {fetching && <Loader></Loader>}
            {!fetching && <><div className={s.largeContainer}>
                {shopItemList.map((categoryProduct) => (<CategoryProductType productObj={categoryProduct}
                    key={categoryProduct.id}
                />))}
            </div>
                <SideTag></SideTag>
            </>
            }
        </div></>;
}
export default CategoryEthnicSarees;