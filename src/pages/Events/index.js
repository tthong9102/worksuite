import classNames from "classnames/bind";
import styles from "./Events.module.css";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Events() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("page-name")}>Lịch làm việc</h1>

        {/*code lịch làm việc - events bằng Fullcalendar*/}
      <div className={cx("table-actions row")}>
        <div className={cx("col-6")}>
          <button className={cx("add-btn")}>
            <FontAwesomeIcon className={cx("plus-icon")} icon={faPlus} />
            Thêm sự kiện
          </button>
        </div>
      </div>

      <div className={cx('calendar')}><Fullcalendar plugins={[dayGridPlugin]} /></div>
    </div>
  );
}

export default Events;
