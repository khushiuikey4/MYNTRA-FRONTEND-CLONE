import s from "./Loader.module.css";

function Loader() {
    return (
        <div className={s.loaderContainer}>
            <div
                className="spinner-border"
                style={{ width: "5rem", height: "5rem", color: "#FF3F6C" }}
                role="status"
            >
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        </div>
    );
}

export default Loader;