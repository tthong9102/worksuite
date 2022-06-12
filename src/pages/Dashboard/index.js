import classNames from "classnames/bind";
import styles from "./Dashboard.module.css";
// import calendar
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DivTotal from "../../components/DivTotal";

const cx = classNames.bind(styles);

function Dashboard() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className={cx("wrapper")}>
      {/* Tiêu đề trang chủ */}
      <h1 className={cx("page-name")}>Trang chủ</h1>

      {/* Nội dung tổng hợp đầu trang chủ */}
      <div className={cx('row')}>
        <DivTotal />
        <DivTotal />
        <DivTotal />
      </div>

      {/* Code lịch làm việc */}
      <div className={cx("row calendars")}>
        {/* Code lịch bình thường - bên trái */}
        <div className={cx("col-4 calendarLeft")}>
          <Calendar onChange={onChange} value={date} />
        </div>
        {/* Code thông báo nhắc việc hôm nay - bên phải */}
        <div className={cx("col-8 scheduleRight")}></div>
      </div>
    </div>
  );
}

export default Dashboard;
