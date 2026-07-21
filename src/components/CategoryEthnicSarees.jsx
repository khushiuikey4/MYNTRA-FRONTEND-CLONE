import CategoryProductType from "./CategoryProductType";
import SideTag from "./SideTag";
import s from "./CategoryEthnicSarees.module.css"
import Loader from "./Loader.jsx"
import { useState, useEffect } from "react";
function CategoryEthnicSarees() {
    let [fetching, setFetching] = useState(true);
    let [categoryProductList, setcategoryProductList] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setcategoryProductList(data.products);
                setFetching(false);
            })
            .catch((error) => {
                console.log("Error fetching the product items", error);
                setFetching(false);

            });


    }, []);


    return <>
        <div>
            {fetching && <Loader></Loader>}
            {!fetching && <div className={s.largeContainer}>
                {categoryProductList.map((categoryProduct) => (<CategoryProductType productObj={categoryProduct}
                    key={categoryProduct.id}
                />))}
            </div>}
        </div></>;
}
export default CategoryEthnicSarees;