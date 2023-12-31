import classNames from "classnames/bind";
import styles from "./header.modules.scss";
import images from "../../../../asset/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <div className={cx("search")}>
                    <input placeholder="Search video" spellCheck="false" />
                    <button className={cx("close")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}>
                    <h1>text</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
