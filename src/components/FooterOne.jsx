import s from "./FooterOne.module.css"
import GridSection from "./GridSection.jsx"
import PopularSearch from "./PopularSearch"
import OfficeAddress from "./OfficeAddress"
function FooterOne() {
    return <div className={s.footerOneContainer}>
        <GridSection></GridSection>
        <PopularSearch></PopularSearch>
        <OfficeAddress></OfficeAddress>
    </div>;
}
export default FooterOne;