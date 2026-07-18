import s from "./NotificationIcon.module.css"
import { GoBell } from "react-icons/go";

function NotificationIcon() {
    return <div className={s.notificationBell}><GoBell />
    </div>;
}
export default NotificationIcon;