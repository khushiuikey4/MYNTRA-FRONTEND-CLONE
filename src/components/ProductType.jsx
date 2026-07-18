import s from "./ProductType.module.css"
function ProductType({ src, type, offer }) {
    return <div className={s.productType}>
        <div className={s.imgContainer}>
            <img src={src} />
        </div>
        <div className={s.imageInfoContainer}>
            <p className={s.Type}>{type}</p>
            <p className={s.Offer}>{offer}</p>
            <p className={s.ShopNow}>Shop Now</p>
        </div>
    </div>
}
export default ProductType;