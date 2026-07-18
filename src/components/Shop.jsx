import s from "./Shop.module.css"
import ProductTypeContainer from "./ProductTypeContainer.jsx"
function Shop() {
    return <><div className={s.shopContainer}>
        <p className={s.title}>Shop by category</p>
    </div>
        <ProductTypeContainer></ProductTypeContainer>
    </>
}
export default Shop;