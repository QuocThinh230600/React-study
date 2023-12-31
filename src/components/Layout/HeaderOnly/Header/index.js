import styles from "./header.modules.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}></div>
        </header>
    );
}

export default Header;
