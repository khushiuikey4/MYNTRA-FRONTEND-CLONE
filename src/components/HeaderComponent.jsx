import Header from "./Header.jsx"
function HeaderComponent({ categoryHover, setCategoryHover, categoryListHover, setCategoryListHover, categoryIndex, setCategoryIndex }) {
    return <Header categoryHover={categoryHover} setCategoryHover={setCategoryHover} categoryListHover={categoryListHover} setCategoryListHover={setCategoryListHover} categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex}></Header>;
}
export default HeaderComponent;