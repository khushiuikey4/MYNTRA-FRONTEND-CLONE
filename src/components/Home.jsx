
import s from "./Home.module.css"
function Home({ handleDropDownEnter, handleDropDownLeave }) {
    return <div className="dropDownContainer" onMouseEnter={() => {
        handleDropDownEnter(0)
    }} onMouseLeave={() => { handleDropDownLeave(0) }}>
        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Bed Linen & Furnishing</a>
                <a className="dropDownText">Bed Runners</a>
                <a className="dropDownText">Mattress Protectors</a>
                <a className="dropDownText">Bedsheets</a>
                <a className="dropDownText">Bedding Sets</a>
                <a className="dropDownText">Blankets, Quilts & Dohars</a>
                <a className="dropDownText">Pillows & Pillow Covers</a>
                <a className="dropDownText">Bed Covers</a>
                <a className="dropDownText">Diwan Sets</a>
                <a className="dropDownText">Chair Pads & Covers</a>
                <a className="dropDownText">Sofa Covers</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Flooring</a>
                <a className="dropDownText">Floor Runners</a>
                <a className="dropDownText">Carpets</a>
                <a className="dropDownText">Floor Mats & Dhurries</a>
                <a className="dropDownText">Door Mats</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Bath</a>
                <a className="dropDownText">Bath Towels</a>
                <a className="dropDownText">Hand & Face Towels</a>
                <a className="dropDownText">Beach Towels</a>
                <a className="dropDownText">Towels Set</a>
                <a className="dropDownText">Bath Rugs</a>
                <a className="dropDownText">Bath Robes</a>
                <a className="dropDownText">Bathroom Accessories</a>
                <a className="dropDownText">Shower Curtains</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Lamps & Lighting</a>
                <a className="dropDownText">Floor Lamps</a>
                <a className="dropDownText">Ceiling Lamps</a>
                <a className="dropDownText">Table Lamps</a>
                <a className="dropDownText">Wall Lamps</a>
                <a className="dropDownText">Outdoor Lamps</a>
                <a className="dropDownText">String Lights</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div className="dropDownBottomLine">
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Home Décor</a>
                <a className="dropDownText">Plants & Planters</a>
                <a className="dropDownText">Aromas & Candles</a>
                <a className="dropDownText">Clocks</a>
                <a className="dropDownText">Mirrors</a>
                <a className="dropDownText">Wall Décor</a>
                <a className="dropDownText">Festive Decor</a>
                <a className="dropDownText">Pooja Essentials</a>
                <a className="dropDownText">Wall Shelves</a>
                <a className="dropDownText">Fountains</a>
                <a className="dropDownText">Showpieces & Vases</a>
                <a className="dropDownText">Ottoman</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Cushions & Cushion Covers</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Curtains</a>
            </div>
        </div>

        <div className="dropDownGrid evenBox">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Furniture</a>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Home Gift Sets</a>
            </div>

            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Kitchen & Table</a>
                <a className="dropDownText">Table Runners</a>
                <a className="dropDownText">Dinnerware & Serveware</a>
                <a className="dropDownText">Cups and Mugs</a>
                <a className="dropDownText">Bakeware & Cookware</a>
                <a className="dropDownText">Kitchen Storage & Tools</a>
                <a className="dropDownText">Bar & Drinkware</a>
                <a className="dropDownText">Table Covers & Furnishings</a>
            </div>
        </div>

        <div className="dropDownGrid">
            <div>
                <a className={`dropDownTitle ${s.dropDownTitleColorHome}`}>Storage</a>
                <a className="dropDownText">Bins</a>
                <a className="dropDownText">Hangers</a>
                <a className="dropDownText">Organisers</a>
                <a className="dropDownText">Hooks & Holders</a>
                <a className="dropDownText">Laundry Bags</a>
            </div>
        </div>
    </div>;
}
export default Home;