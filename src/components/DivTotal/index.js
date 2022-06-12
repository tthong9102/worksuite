import classNames from "classnames/bind";
import styles from "./DivTotal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function DivTotal() {
  return (
    <div className={cx("col-4")}>
      <a href="/">
        <div className={cx("elements")}>
          <div className={cx("block-title")}>
            <h5 className={cx("title")}>Số lượng nhân viên</h5>
            <div className={cx("number")}>
              <p>100</p>
            </div>
          </div>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default DivTotal;