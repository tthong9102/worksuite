import classNames from "classnames/bind";
import styles from "./CardMessage.module.css";

const cx = classNames.bind(styles);

function CardMessage() {
  return (
    <div className={cx("card")}>
      <a href="/">
        <div className={cx("card-horizontal")}>
          <div className={cx("card-img")}>
            <img
              src="https://i.pravatar.cc/300?u=rosinski@example.org"
              alt="Miss Genral"
            />
          </div>

          <div className={cx("card-body")}>
            <div className={cx("header")}>
              <h4 className={cx("card-title")}>Miss Genral</h4>
              <p className={cx("card-date")}>18 minutes ago</p>
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
      </a>
    </div>
  );
}

export default CardMessage;
