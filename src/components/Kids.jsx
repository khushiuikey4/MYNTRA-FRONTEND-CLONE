import s from "./Kids.module.css"
function Kids({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className="dropDownContainer" onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>

        <div className="dropDownGrid">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Boys Clothing</a>
                <a className="dropDownText">T-Shirts</a>
                <a className="dropDownText">Shirts</a>
                <a className="dropDownText">Shorts</a>
                <a className="dropDownText">Jeans</a>
                <a className="dropDownText">Trousers</a>
                <a className="dropDownText">Clothing Sets</a>
                <a className="dropDownText">Ethnic Wear</a>
                <a className="dropDownText">Track Pants & Pyjamas</a>
                <a className="dropDownText">Jacket, Sweater & Sweatshirts</a>
                <a className="dropDownText">Party Wear</a>
                <a className="dropDownText">Innerwear & Thermals</a>
                <a className="dropDownText">Nightwear & Loungewear</a>
                <a className="dropDownText">Value Packs</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Girls Clothing</a>
                <a className="dropDownText">Dresses</a>
                <a className="dropDownText">Tops</a>
                <a className="dropDownText">Tshirts</a>
                <a className="dropDownText">Clothing Sets</a>
                <a className="dropDownText">Lehenga choli</a>
                <a className="dropDownText">Kurta Sets</a>
                <a className="dropDownText">Party wear</a>
                <a className="dropDownText">Dungarees & Jumpsuits</a>
                <a className="dropDownText">Skirts & shorts</a>
                <a className="dropDownText">Tights & Leggings</a>
                <a className="dropDownText">Jeans, Trousers & Capris</a>
                <a className="dropDownText">Jacket, Sweater & Sweatshirts</a>
                <a className="dropDownText">Innerwear & Thermals</a>
                <a className="dropDownText">Nightwear & Loungewear</a>
                <a className="dropDownText">Value Packs</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Footwear</a>
                <a className="dropDownText">Casual Shoes</a>
                <a className="dropDownText">Flipflops</a>
                <a className="dropDownText">Sports Shoes</a>
                <a className="dropDownText">Flats</a>
                <a className="dropDownText">Sandals</a>
                <a className="dropDownText">Heels</a>
                <a className="dropDownText">School Shoes</a>
                <a className="dropDownText">Socks</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Toys & Games</a>
                <a className="dropDownText">Learning & Development</a>
                <a className="dropDownText">Activity Toys</a>
                <a className="dropDownText">Soft Toys</a>
                <a className="dropDownText">Action Figure / Play set</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Infants</a>
                <a className="dropDownText">Bodysuits</a>
                <a className="dropDownText">Rompers & Sleepsuits</a>
                <a className="dropDownText">Clothing Sets</a>
                <a className="dropDownText">Tshirts & Tops</a>
                <a className="dropDownText">Dresses</a>
                <a className="dropDownText">Bottom wear</a>
                <a className="dropDownText">Winter Wear</a>
                <a className="dropDownText">Innerwear & Sleepwear</a>
                <a className="dropDownText">Infant Care</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Home & Bath</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Personal Care</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Kids Accessories</a>
                <a className="dropDownText">Bags & Backpacks</a>
                <a className="dropDownText">Watches</a>
                <a className="dropDownText">Jewellery & Hair accessory</a>
                <a className="dropDownText">Sunglasses</a>
                <a className="dropDownText">Masks & Protective Gears</a>
                <a className="dropDownText">Caps & Hats</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorKids}`}>Brands</a>
                <a className="dropDownText">H&M</a>
                <a className="dropDownText">Max Kids</a>
                <a className="dropDownText">Pantaloons</a>
                <a className="dropDownText">United Colors Of Benetton Kids</a>
                <a className="dropDownText">YK</a>
                <a className="dropDownText">U.S. Polo Assn. Kids</a>
                <a className="dropDownText">Mothercare</a>
                <a className="dropDownText">HRX</a>
            </div>
        </div>
    </div>;
}
export default Kids;