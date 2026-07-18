import { useState } from "react";
import styles from "./Navigation.module.css"
import Men from "./Men.jsx"
import Women from "./Women.jsx"
import Kids from "./Kids.jsx"
import Home from "./Home.jsx"
import Beauty from "./Beauty.jsx"
import Genz from "./Genz.jsx"
import Studio from "./Studio.jsx"

function Navigation({ categoryHover, setCategoryHover, categoryListHover, setCategoryListHover, categoryIndex, setCategoryIndex }) {
    let handleMouseEnter = (a) => {
        console.log("yeah")
        setCategoryIndex(a);
        setCategoryHover(true);
    }
    let handleMouseLeave = (a) => {
        setCategoryIndex(-1);
        setCategoryHover(false);
    }
    let handleDropDownEnter = (a) => {
        setCategoryListHover(true);
        setCategoryIndex(a);
    }
    let handleDropDownLeave = (a) => {
        setCategoryIndex(-1);
        setCategoryListHover(false);
    }

    return <>
        <div className={styles.navigation}>
            {(categoryHover || categoryListHover) && categoryIndex == 0 && <Men handleDropDownEnter={() => { handleDropDownEnter(0) }} handleDropDownLeave={() => { handleDropDownLeave(0) }}></Men>}
            {(categoryHover || categoryListHover) && categoryIndex == 1 && <Women handleDropDownEnter={() => { handleDropDownEnter(1) }} handleDropDownLeave={() => { handleDropDownLeave(1) }}></Women>}
            {(categoryHover || categoryListHover) && categoryIndex == 2 && <Kids handleDropDownEnter={() => { handleDropDownEnter(2) }} handleDropDownLeave={() => { handleDropDownLeave(2) }}></Kids>}
            {(categoryHover || categoryListHover) && categoryIndex == 3 && <Home handleDropDownEnter={() => { handleDropDownEnter(3) }} handleDropDownLeave={() => { handleDropDownLeave(3) }}></Home>}
            {(categoryHover || categoryListHover) && categoryIndex == 4 && <Beauty handleDropDownEnter={() => { handleDropDownEnter(4) }} handleDropDownLeave={() => { handleDropDownLeave(4) }}></Beauty>}
            {(categoryHover || categoryListHover) && categoryIndex == 5 && <Genz handleDropDownEnter={() => { handleDropDownEnter(5) }} handleDropDownLeave={() => { handleDropDownLeave(5) }}></Genz>}
            {(categoryHover || categoryListHover) && categoryIndex == 6 && <Studio handleDropDownEnter={() => { handleDropDownEnter(6) }} handleDropDownLeave={() => { handleDropDownLeave(6) }}></Studio>}

            {/* links */}

            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(0))} onMouseLeave={() => (handleMouseLeave(0))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">MEN</a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 0 && (<div className={styles.navBottomLine}></div>)}
            </div>

            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(1))} onMouseLeave={() => (handleMouseLeave(1))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">WOMEN</a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 1 && (<div className={styles.navBottomLine}></div>)}
            </div>

            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(2))} onMouseLeave={() => (handleMouseLeave(2))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">KIDS</a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 2 && (<div className={styles.navBottomLine}></div>)}
            </div>

            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(3))} onMouseLeave={() => (handleMouseLeave(3))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">HOME</a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 3 && (<div className={styles.navBottomLine}></div>)}
            </div>

            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(4))} onMouseLeave={() => (handleMouseLeave(4))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">BEAUTY</a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 4 && (<div className={styles.navBottomLine}></div>)}
            </div>
            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(5))} onMouseLeave={() => (handleMouseLeave(5))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">GENZ</a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 5 && (<div className={styles.navBottomLine}></div>)}
            </div>
            <div className={styles.navLinkContainer} onMouseEnter={() => (handleMouseEnter(6))} onMouseLeave={() => (handleMouseLeave(6))}>
                <div className={styles.navLinkBox}><a className={styles.navLink} href="#">STUDIO<sup>NEW</sup></a></div>
                {(categoryHover || categoryListHover) && categoryIndex == 6 && (<div className={styles.navBottomLine}></div>)}
            </div>
        </div>
    </>;
}
export default Navigation;