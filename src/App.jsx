import Carausel from "./components/Carausel.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx"
import Shop from "./components/Shop.jsx"
import FooterOne from "./components/FooterOne.jsx"
import FooterTwo from "./components/FooterTwo.jsx"
import SideTag from "./components/SideTag.jsx"
import NotificationIcon from "./components/NotificationIcon.jsx"
import { useState } from "react";
function App() {
  let [categoryHover, setCategoryHover] = useState(false);
  let [categoryListHover, setCategoveryListHover] = useState(false);
  let [categoryIndex, setCategoryIndex] = useState(-1);
  return <>
    <Header categoryHover={categoryHover} setCategoryHover={setCategoryHover} categoryListHover={categoryListHover} setCategoryListHover={setCategoveryListHover} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex}></Header>
    <main>
      <h1>Hello Git</h1>
      <SideTag></SideTag>
      <NotificationIcon></NotificationIcon>
      <Hero></Hero>
      <Carausel></Carausel>
      <Shop></Shop>
    </main>
    <footer>
      <FooterOne></FooterOne>
      <FooterTwo></FooterTwo>
    </footer>
  </>
}
export default App;