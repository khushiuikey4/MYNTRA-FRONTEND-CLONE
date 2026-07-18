import style from "./Slider.module.css"
import cara1 from "../Images/caro1.png"
import cara2 from "../Images/caro2.png"
import cara3 from "../Images/caro3.png"
import cara4 from "../Images/caro4.png"
import { useEffect, useState } from "react"

function Slider({ currIndx, setCurrIndx, enableTransition, setTransition }) {

    useEffect(() => {
        let t = setInterval(() => {
            setCurrIndx(prev => (prev + 1) % 5);
        }, 5000);
        return () => {
            clearInterval(t);
        }
    }, []);
    let handleTransitionEnd = () => {
        if (currIndx === 4) {
            setTransition(false);
            setCurrIndx(0);
        }
    }
    useEffect(() => {
        if (!enableTransition) {
            requestAnimationFrame(() => {
                setTransition(true);
            })
        }
    }, [enableTransition]);
    let Indx = (currIndx * 100) / 5;
    return <div className={style.slider}>
        <div className={style.track} style={{ transform: `translateX(-${Indx}%)`, transition: enableTransition ? "transform 0.5s ease" : "none" }} onTransitionEnd={handleTransitionEnd}>
            <img src={cara1} className={style.caraImg} />
            <img src={cara2} className={style.caraImg} />
            <img src={cara3} className={style.caraImg} />
            <img src={cara4} className={style.caraImg} />
            <img src={cara1} className={style.caraImg} />
        </div>
    </div>;
}
export default Slider;