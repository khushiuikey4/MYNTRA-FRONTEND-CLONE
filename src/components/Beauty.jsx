import s from "./Beauty.module.css"
function Beauty({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className="dropDownContainer" onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>
        <div className="dropDownGrid">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Makeup</a>
                <a className="dropDownText">Lipstick</a>
                <a className="dropDownText">Lip Gloss</a>
                <a className="dropDownText">Lip Liner</a>
                <a className="dropDownText">Mascara</a>
                <a className="dropDownText">Eyeliner</a>
                <a className="dropDownText">Kajal</a>
                <a className="dropDownText">Eyeshadow</a>
                <a className="dropDownText">Foundation</a>
                <a className="dropDownText">Primer</a>
                <a className="dropDownText">Concealer</a>
                <a className="dropDownText">Compact</a>
                <a className="dropDownText">Nail Polish</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Skincare, Bath & Body</a>
                <a className="dropDownText">Face Moisturiser</a>
                <a className="dropDownText">Cleanser</a>
                <a className="dropDownText">Masks & Peel</a>
                <a className="dropDownText">Sunscreen</a>
                <a className="dropDownText">Serum</a>
                <a className="dropDownText">Face Wash</a>
                <a className="dropDownText">Eye Cream</a>
                <a className="dropDownText">Lip Balm</a>
                <a className="dropDownText">Body Lotion</a>
                <a className="dropDownText">Body Wash</a>
                <a className="dropDownText">Body Scrub</a>
                <a className="dropDownText">Hand Cream</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Baby Care</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Masks</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Haircare</a>
                <a className="dropDownText">Shampoo</a>
                <a className="dropDownText">Conditioner</a>
                <a className="dropDownText">Hair Cream</a>
                <a className="dropDownText">Hair Oil</a>
                <a className="dropDownText">Hair Gel</a>
                <a className="dropDownText">Hair Color</a>
                <a className="dropDownText">Hair Serum</a>
                <a className="dropDownText">Hair Accessory</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Fragrances</a>
                <a className="dropDownText">Perfume</a>
                <a className="dropDownText">Deodorant</a>
                <a className="dropDownText">Body Mist</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Appliances</a>
                <a className="dropDownText">Hair Straightener</a>
                <a className="dropDownText">Hair Dryer</a>
                <a className="dropDownText">Epilator</a>
            </div>

            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Men's Grooming</a>
                <a className="dropDownText">Trimmers</a>
                <a className="dropDownText">Beard Oil</a>
                <a className="dropDownText">Hair Wax</a>
            </div>

            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Beauty Gift & Makeup Set</a>
                <a className="dropDownText">Beauty Gift</a>
                <a className="dropDownText">Makeup Kit</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Premium Beauty</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Wellness & Hygiene</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorBeauty}`}>Top Brands</a>
                <a className="dropDownText">Lakme</a>
                <a className="dropDownText">Maybelline</a>
                <a className="dropDownText">LOreal</a>
                <a className="dropDownText">Philips</a>
                <a className="dropDownText">Bath & Body Works</a>
                <a className="dropDownText">THE BODY SHOP</a>
                <a className="dropDownText">Biotique</a>
                <a className="dropDownText">Mamaearth</a>
                <a className="dropDownText">MCaffeine</a>
                <a className="dropDownText">Nivea</a>
                <a className="dropDownText">Lotus Herbals</a>
                <a className="dropDownText">LOreal Professionnel</a>
                <a className="dropDownText">KAMA AYURVEDA</a>
                <a className="dropDownText">M.A.C</a>
                <a className="dropDownText">Forest Essentials</a>
            </div>
        </div>
    </div>;
}
export default Beauty;