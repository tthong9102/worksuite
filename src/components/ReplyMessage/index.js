import classNames from "classnames/bind";
import styles from "./ReplyMessage.module.css";

const cx = classNames.bind(styles);

function ReplyMessage() {
  return (
    <div className={cx("card")}>
        <div className={cx("card-horizontal")}>
          <div className={cx("card-img")}>
            <img
              src="https://i.pravatar.cc/300?u=rosinski@example.org"
              alt="Miss Genral"
            />
          </div>

          <div className={cx("card-body")}>
            <div className={cx("header")}>
              <a href="/" className={cx("card-title")}>Miss Genral</a>
              <p className={cx("card-date")}>15-06-2022 02:32 pm</p>
            </div>

            <div className={cx("card-text")}>
              <div>
                Alice was beginning to see the earth takes twenty-four hours to
                turn round on its axis--' 'Talking of axes,' said the Pigeon;
                'but if they do, why then they're a kind of thing that would be
                grand.
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ReplyMessage;
