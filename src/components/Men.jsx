import s from "./Men.module.css"
function Men({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className="dropDownContainer" onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className="dropDownTitle" className={s.dropDownTitleColorMen}>Topwear</a>
                <a className="dropDownText">T-Shirts</a>
                <a className="dropDownText">Casual Shirts</a>
                <a className="dropDownText">Formal Shirts</a>
                <a className="dropDownText">Sweatshirts</a>
                <a className="dropDownText">Sweaters</a>
                <a className="dropDownText">Jackets</a>
                <a className="dropDownText">Blazers & Coats</a>
                <a className="dropDownText">Suits</a>
                <a className="dropDownText">Rain Jackets</a>
            </div>

            <div>
                <a className="dropDownTitle" className={s.dropDownTitleColorMen}>Indian & Festive Wear</a>
                <a className="dropDownText">Kurtas & Kurta Sets</a>
                <a className="dropDownText">Sherwanis</a>
                <a className="dropDownText">Nehru Jackets</a>
                <a className="dropDownText">Dhotis</a>
            </div>
        </div>


        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Bottomwear</a>
                <a className="dropDownText">Jeans</a>
                <a className="dropDownText">Casual Trousers</a>
                <a className="dropDownText">Formal Trousers</a>
                <a className="dropDownText">Shorts</a>
                <a className="dropDownText">Track Pants & Joggers</a>
            </div>

            <div className="dropDownBottomLine">
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Innerwear & Sleepwear</a>
                <a className="dropDownText">Briefs & Trunks</a>
                <a className="dropDownText">Boxers</a>
                <a className="dropDownText">Vests</a>
                <a className="dropDownText">Sleepwear & Loungewear</a>
                <a className="dropDownText">Thermals</a>
            </div>
            <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Plus Size</a>

        </div>
        <div className="dropDownGrid ">
            <div className="dropDownBottomLine">
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Footwear</a>
                <a className="dropDownText">Casual Shoes</a>
                <a className="dropDownText">Sports Shoes</a>
                <a className="dropDownText"> Formal Shoes</a>
                <a className="dropDownText">Sneakers</a>
                <a className="dropDownText">Sandals & Floaters</a>
                <a className="dropDownText">Flip Flops</a>
                <a className="dropDownText">Socks</a>
            </div>
            <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Personal Care & Grooming</a>
            <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Sunglasses & Frames</a>
            <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Watches</a>

        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Sports & Active Wear</a>
                <a className="dropDownText">Sports Shoes</a>
                <a className="dropDownText">Sports Sandals</a>
                <a className="dropDownText">Active T-Shirts</a>
                <a className="dropDownText">Track Pants & Shorts</a>
                <a className="dropDownText">Tracksuits</a>
                <a className="dropDownText">Jackets & Sweatshirts</a>
                <a className="dropDownText">Sports Accessories</a>
                <a className="dropDownText">Swimwear</a>
            </div>

            <div>
                <a className="dropDownTitle" className={s.dropDownTitleColorMen}>Gadgets</a>
                <a className="dropDownText">Smart Wearables</a>
                <a className="dropDownText">Fitness Gadgets</a>
                <a className="dropDownText">Headphones</a>
                <a className="dropDownText">Speakers</a>
            </div>
        </div>
        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Fashion Accessories</a>
                <a className="dropDownText">Wallets</a>
                <a className="dropDownText">Belts</a>
                <a className="dropDownText">Perfumes & Body Mists</a>
                <a className="dropDownText">Trimmers</a>
                <a className="dropDownText">Deodorants</a>
                <a className="dropDownText">Ties, Cufflinks & Pocket Squares</a>
                <a className="dropDownText">Accessory Gift Sets</a>
                <a className="dropDownText">Caps & Hats</a>
                <a className="dropDownText">Mufflers, Scarves & Gloves</a>
                <a className="dropDownText">Phone Cases</a>
                <a className="dropDownText">Rings & Wristwear</a>
                <a className="dropDownText">Helmets</a>
            </div>

            <div className="dropDownBottomLine">
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Bags & Backpacks</a>
                <a className="dropDownTitle " className={s.dropDownTitleColorMen}>Luggages & Trolleys</a>


            </div>
        </div>
    </div>;
}
export default Men;