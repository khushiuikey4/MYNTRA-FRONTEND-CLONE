import s from "./Genz.module.css"
function Genz({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className="dropDownContainer" onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>
        <div className="dropDownGrid">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Women's Western Wear</a>
                <a className="dropDownText">Dresses Under ₹599</a>
                <a className="dropDownText">Tops Under ₹399</a>
                <a className="dropDownText">Jeans Under ₹599</a>
                <a className="dropDownText">Trousers Under ₹699</a>
                <a className="dropDownText">T-shirts Under ₹299</a>
                <a className="dropDownText">Shirts Under ₹499</a>
                <a className="dropDownText">Skirts Under ₹499</a>
                <a className="dropDownText">Shorts Under ₹699</a>
                <a className="dropDownText">Co-ords Under ₹799</a>
                <a className="dropDownText">Jumpsuits Under ₹899</a>
                <a className="dropDownText">Track pants Under ₹699</a>
                <a className="dropDownText">Jackets Under ₹899</a>
                <a className="dropDownText">Sweatshirts Under ₹699</a>
                <a className="dropDownText">Sweaters Under ₹899</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Women's Ethnic Wear</a>
                <a className="dropDownText">Kurtas Under ₹399</a>
                <a className="dropDownText">Kurtis Under ₹499</a>
                <a className="dropDownText">Kurta sets Under ₹499</a>
                <a className="dropDownText">Ethnic Dresses Under ₹999</a>
                <a className="dropDownText">Palazzos Under ₹799</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Lingerie & Loungewear</a>
                <a className="dropDownText">Bras Under ₹399</a>
                <a className="dropDownText">Night suits Under ₹799</a>
                <a className="dropDownText">Nightdresses Under ₹999</a>
                <a className="dropDownText">Lounge pants Under ₹999</a>
                <a className="dropDownText">Briefs Under ₹599</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Men's Casual Wear</a>
                <a className="dropDownText">T-shirts Under ₹299</a>
                <a className="dropDownText">Shirts Under ₹499</a>
                <a className="dropDownText">Jeans Under ₹599</a>
                <a className="dropDownText">Trousers Under ₹699</a>
                <a className="dropDownText">Shorts Under ₹599</a>
                <a className="dropDownText">Track pants Under ₹699</a>
                <a className="dropDownText">Jackets Under ₹899</a>
                <a className="dropDownText">Sweatshirts Under ₹699</a>
                <a className="dropDownText">Sweaters Under ₹999</a>
                <a className="dropDownText">Co-ords Under ₹999</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Men's Occasion Wear</a>
                <a className="dropDownText">Kurtas Under ₹799</a>
                <a className="dropDownText">Kurta Sets Under ₹999</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Women's Footwear</a>
                <a className="dropDownText">Heels Under ₹599</a>
                <a className="dropDownText">Flats Under ₹499</a>
                <a className="dropDownText">Casual shoes Under ₹699</a>
                <a className="dropDownText">Sports shoes Under ₹999</a>
                <a className="dropDownText">Flip flops Under ₹799</a>
                <a className="dropDownText">Boots Under ₹999</a>
                <a className="dropDownText">Ballerinas Under ₹799</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Men's Footwear</a>
                <a className="dropDownText">Casual shoes Under ₹799</a>
                <a className="dropDownText">Sports shoes Under ₹999</a>
                <a className="dropDownText">Formal shoes Under ₹999</a>
                <a className="dropDownText">Sandals Under ₹799</a>
                <a className="dropDownText">Flip flops Under ₹499</a>
                <a className="dropDownText">Boots Under ₹999</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Beauty & Grooming</a>
                <a className="dropDownText">Skincare Under ₹299</a>
                <a className="dropDownText">Haircare Under ₹399</a>
                <a className="dropDownText">Bath & Body Under ₹399</a>
                <a className="dropDownText">MakeUp Under ₹299</a>
                <a className="dropDownText">Fragrances Under ₹399</a>
                <a className="dropDownText">Appliances Under ₹999</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorGenz}`}>Accessories</a>
                <a className="dropDownText">Jewellery Under ₹299</a>
                <a className="dropDownText">Handbags Under ₹499</a>
                <a className="dropDownText">Clutches Under ₹999</a>
                <a className="dropDownText">Backpacks Under ₹699</a>
                <a className="dropDownText">Wallets Under ₹499</a>
                <a className="dropDownText">Sunglasses Under ₹699</a>
                <a className="dropDownText">Belts Under ₹799</a>
                <a className="dropDownText">Caps Under ₹899</a>
            </div>
        </div>
    </div>;
}
export default Genz;