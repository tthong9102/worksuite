import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.css";
// import calendar
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const cx = classNames.bind(styles);

function Dashboard() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className={cx('wrapper')}>
      {/* Tiêu đề trang chủ */}
      <h1 className={cx("page-name")}>Trang chủ</h1>

      {/* Nội dung tổng hợp đầu trang chủ */}
      <div className={cx('row')}>
        <div className={cx("col-4")}>
          <a href="/">
            <div className={cx("elements")}>
              <div className={cx("block-title")}>
                <h5 className={cx("title")}>Số lượng khách hàng</h5>
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

        <div className={cx("col-4")}>
          <a href="/">
            <div className={cx("elements")}>
              <div className={cx("block-title")}>
                <h5 className={cx("title")}>Số lượng công việc</h5>
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
      </div>

      {/* Code lịch làm việc */}
      <div className={cx('row calendars')}>
        {/* Code lịch bình thường - bên trái */}
        <div className={cx('col-4 calendarLeft')}>
          <Calendar onChange={onChange} value={date} />
        </div>
        {/* Code thông báo nhắc việc hôm nay - bên phải */}
        <div className={cx('col-8 scheduleRight')}></div>
      </div>
    </div>
  );
}

export default Dashboard;
