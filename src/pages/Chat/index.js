import classNames from "classnames/bind";
import styles from "./Chat.module.css";
import Search from "../../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardMessage from "../../components/CardMessage";

const cx = classNames.bind(styles);

function Chat() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("page-name")}>Chat</h1>

      {/**/}
      <div className={cx("msg-container row")}>
        {/*Danh sách các cuộc hội thoại - bên trái*/}
        <div className={cx("msg-content-left col-4")}>
          {/* Lọc tìm tên cuộc hội thoại*/}
          <div className={cx("msg-header")}>
            <Search className={cx("search")} />
          </div>

          {/*Danh sách các cuộc hội thoại */}
          <div className={cx("msg-conversation")}>
            <CardMessage />
            <CardMessage />
            <CardMessage />
          </div>
        </div>

        {/*Nơi gửi tin nhắn cho cuộc hội thoại - bên phải*/}
        <div className={cx("msg-content-right col-8")}>
          {/*Tiêu đề: Tên người gửi và nút tạo tin nhắn*/}
          <div className={cx("msg-header-right")}>
            <p className={cx("msg-name")}>Huyen Trang</p>

            <div className={cx("button")}>
              <button className={cx("add-btn")}>
                <FontAwesomeIcon className={cx("plus-icon")} icon={faPlus} />
                Tạo tin nhắn mới
              </button>
            </div>
          </div>

          {/*Nội dung tin nhắn*/}
          <div className={cx("chat-box")}>
              <div className={cx("chat")}>
                <div className={cx("ticket-msg")}>
                  
                </div>
                <div className={cx("typing")}>

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
