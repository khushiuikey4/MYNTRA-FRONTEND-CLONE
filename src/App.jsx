import Carausel from "./components/Carausel.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx"
import Shop from "./components/Shop.jsx"
import FooterOne from "./components/FooterOne.jsx"
import FooterTwo from "./components/FooterTwo.jsx"
import SideTag from "./components/SideTag.jsx"
import NotificationIcon from "./components/NotificationIcon.jsx"
import { useEffect, useState } from "react";
import HeaderComponent from "./components/HeaderComponent.jsx"
import HomePage from "./components/HomePage.jsx"
import Footer from "./components/Footer.jsx"
import BagPage from "./components/BagPage.jsx";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import CategoryEthnicSarees from "./components/CategoryEthnicSarees.jsx"

function App() {
  let [categoryHover, setCategoryHover] = useState(false);
  let [categoryListHover, setCategoryListHover] = useState(false);
  let [categoryIndex, setCategoryIndex] = useState(-1);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);
  return <>
    <HeaderComponent categoryHover={categoryHover} setCategoryHover={setCategoryHover} categoryListHover={categoryListHover} setCategoryListHover={setCategoryListHover} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex}></HeaderComponent>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Bag" element={<BagPage />} />
      <Route path="/EthnicSarees" element={<CategoryEthnicSarees />} />


    </Routes>
    <Footer></Footer>
  </>
}
export default App;