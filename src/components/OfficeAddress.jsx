import s from "./OfficeAddress.module.css"
function OfficeAddress() {
    return <div className={s.officeAddressContainer}>
        <div className={s.addressTitle}>Registered Office Address</div>
        <div className={s.address}>
            <div className={s.addressLine}>Buildings Alyssa,</div>
            <div className={s.addressLine}>Begonia and Clover situated in Embassy Tech Village,</div>
            <div className={s.addressLine}>Outer Ring Road,</div>
            <div className={s.addressLine}>Devarabeesanahalli Village,</div>
            <div className={s.addressLinePin}><span>Varthur Hobli,</span> <span>CIN: U72300KA2007PTC041799</span></div>
            <div className={s.addressLinePh}><span>Bengaluru – 560103, India</span><span>Telephone: <span className={s.ph}>080‑40011450</span></span></div>
        </div>
    </div>;
}
export default OfficeAddress;