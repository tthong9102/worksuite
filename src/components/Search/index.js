import classNames from "classnames/bind";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("input-group")}>
      <div className={cx("search-group")}>
        <div className={cx("search-icon")}>
          <FontAwesomeIcon icon={faSearch} className={cx("icon")} />
          <input
            className={cx("input")}
            type="text"
            placeholder="Tìm cuộc hội thoại..."
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Search;
