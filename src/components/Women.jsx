import s from "./Women.module.css";
function Women({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className="dropDownContainer" onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>
        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Indian & Fusion Wear</a>
                <a className="dropDownText">Kurtas & Suits</a>
                <a className="dropDownText">Kurtis, Tunics & Tops</a>
                <a className="dropDownText">Sarees</a>
                <a className="dropDownText">Ethnic Wear</a>
                <a className="dropDownText">Leggings, Salwars & Churidars</a>
                <a className="dropDownText">Skirts & Palazzos</a>
                <a className="dropDownText">Dress Materials</a>
                <a className="dropDownText">Lehenga Cholis</a>
                <a className="dropDownText">Dupattas & Shawls</a>
                <a className="dropDownText">Jackets</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Belts, Scarves & More</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Watches & Wearables</a>
            </div>
        </div>
        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Western Wear</a>
                <a className="dropDownText">Dresses</a>
                <a className="dropDownText">Tops</a>
                <a className="dropDownText">Tshirts</a>
                <a className="dropDownText">Jeans</a>
                <a className="dropDownText">Trousers & Capris</a>
                <a className="dropDownText">Shorts & Skirts</a>
                <a className="dropDownText">Co-ords</a>
                <a className="dropDownText">Playsuits</a>
                <a className="dropDownText">Jumpsuits</a>
                <a className="dropDownText">Shrugs</a>
                <a className="dropDownText">Sweaters & Sweatshirts</a>
                <a className="dropDownText">Jackets & Coats</a>
                <a className="dropDownText">Blazers & Waistcoats</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Plus Size</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Maternity</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Sunglasses & Frames</a>
            </div>

            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Footwear</a>
                <a className="dropDownText">Flats</a>
                <a className="dropDownText">Casual Shoes</a>
                <a className="dropDownText">Heels</a>
                <a className="dropDownText">Boots</a>
                <a className="dropDownText">Sports Shoes & Floaters</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Sports & Active Wear</a>
                <a className="dropDownText">Clothing</a>
                <a className="dropDownText">Footwear</a>
                <a className="dropDownText">Sports Accessories</a>
                <a className="dropDownText">Sports Equipment</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Lingerie & Sleepwear</a>
                <a className="dropDownText">Bra</a>
                <a className="dropDownText">Briefs</a>
                <a className="dropDownText">Shapewear</a>
                <a className="dropDownText">Sleepwear & Loungewear</a>
                <a className="dropDownText">Swimwear</a>
                <a className="dropDownText">Camisoles & Thermals</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Beauty & Personal Care</a>
                <a className="dropDownText">Makeup</a>
                <a className="dropDownText">Skincare</a>
                <a className="dropDownText">Premium Beauty</a>
                <a className="dropDownText">Lipsticks</a>
                <a className="dropDownText">Fragrances</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Gadgets</a>
                <a className="dropDownText">Smart Wearables</a>
                <a className="dropDownText">Fitness Gadgets</a>
                <a className="dropDownText">Headphones</a>
                <a className="dropDownText">Speakers</a>
            </div>

            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Jewellery</a>
                <a className="dropDownText">Fashion Jewellery</a>
                <a className="dropDownText">Fine Jewellery</a>
                <a className="dropDownText">Earrings</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Backpacks</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Handbags, Bags & Wallets</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorWomen}`}>Luggages & Trolleys</a>
            </div>
        </div>
    </div>;
}
export default Women;