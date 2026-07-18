import { useEffect, useState } from "react";
import styles from "./Carausel.module.css";
import Slider from "./Slider.jsx"
function Carausel() {
    let [currIndx, setCurrIndx] = useState(0);
    let [enableTransition, setTransition] = useState(true);

    return <div className={styles.cara}>
        <Slider currIndx={currIndx} setCurrIndx={setCurrIndx} enableTransition={enableTransition} setTransition={setTransition}></Slider>
        <div className={styles.dotBox}>
            <div className={styles.dot} style={{ backgroundColor: (currIndx == (0) || currIndx == 4) ? "#7e818c" : "#CACCD2" }}></div>
            <div className={styles.dot} style={{ backgroundColor: currIndx == (1) ? "#7e818c" : "#CACCD2" }}></div>
            <div className={styles.dot} style={{ backgroundColor: currIndx == (2) ? "#7e818c" : "#CACCD2" }}></div>
            <div className={styles.dot} style={{ backgroundColor: currIndx == (3) ? "#7e818c" : "#CACCD2" }}></div>
        </div>
    </div>;
}
export default Carausel;