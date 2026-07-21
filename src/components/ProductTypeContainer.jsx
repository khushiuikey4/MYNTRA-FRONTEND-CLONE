import s from "./ProductTypeContainer.module.css"
import ProductType from "./ProductType.jsx"
import one from "../Images/one.png"
import two from "../Images/two.png"
import three from "../Images/three.png"
import four from "../Images/four.png"
import five from "../Images/five.png"
import six from "../Images/six.png"
import seven from "../Images/seven.png"
import eight from "../Images/eight.png"
import nine from "../Images/nine.png"
import ten from "../Images/ten.png"
import eleven from "../Images/eleven.png"
import twelve from "../Images/twelve.png"
import thirteen from "../Images/thirteen.png"
import fourteen from "../Images/fourteen.png"
import fifteen from "../Images/fifteen.png"
import sixteen from "../Images/sixteen.png"
import seventeen from "../Images/seventeen.png"
import eighteen from "../Images/eighteen.png"
import nineteen from "../Images/nineteen.png"
import twenty from "../Images/twenty.png"
import twentyOne from "../Images/twentyOne.png"
import twentyTwo from "../Images/twentyTwo.png"
import twentyThree from "../Images/twentyThree.png"
import twentyFour from "../Images/twentyFour.png"
import twentyFive from "../Images/twentyFive.png"
import twentySix from "../Images/twentySix.png"
import twentySeven from "../Images/twentySeven.png"
import twentyEight from "../Images/twentyEight.png"
import twentyNine from "../Images/twentyNine.png"
import thirty from "../Images/thirty.png"
import thirtyOne from "../Images/thirtyOne.png"
import thirtyTwo from "../Images/thirtyTwo.png"
import thirtyThree from "../Images/thirtyThree.png"
import { Link } from "react-router-dom"
function ProductTypeContainer() {
    return <div><div className={s.largeContainer}>
        <Link to="EthnicSarees" className="routerLink">
            <ProductType src={one} type={"Ethnic Sarees"} offer={"50-70% OFF"}></ProductType>
        </Link>
        <ProductType src={two} type={"Casual Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={three} type={"Men's Active Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={four} type={"Women's Active Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={five} type={"Western Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={six} type={"Sports Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={seven} type={"LoungeWear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={eight} type={"InnerWear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={nine} type={"Lingerie"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={ten} type={"Watches"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={eleven} type={"Grooming"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twelve} type={"Beauty & Makeup"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={thirteen} type={"Kid's Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={fourteen} type={"Men's FootWear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={fifteen} type={"Women's FootWear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={sixteen} type={"Bags, Belts and Wallets"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={seventeen} type={"Office Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={eighteen} type={"Men's Ethnic Wear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={nineteen} type={"Home Decor"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twenty} type={"HandBags"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyOne} type={"HeadPhones & Speakers"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyTwo} type={"jewellery"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyThree} type={"Size Inclusive Styles"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyFour} type={"Inclusive Styles"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyFive} type={"Watch & Wearables"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentySix} type={"Sleepwear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentySeven} type={"Workwear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyEight} type={"EyeWear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={twentyNine} type={"Workwear"} offer={"50-70% OFF"}></ProductType>
        <ProductType src={thirty} type={"Casual Styles"} offer={"50-70% OFF"}></ProductType>
    </div>
        <div className={s.flexContainer}>
            <ProductType src={thirtyOne} type={"Bags & Backpacks"} offer={"50-70% OFF"}></ProductType>
            <ProductType src={thirtyTwo} type={"Trolleys & luggage Bags"} offer={"50-70% OFF"}></ProductType>
            <ProductType src={thirtyThree} type={"Flip Flops"} offer={"50-70% OFF"}></ProductType>
        </div>
    </div>;
}
export default ProductTypeContainer;