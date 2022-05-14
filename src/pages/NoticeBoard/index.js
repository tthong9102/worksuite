import classNames from 'classnames/bind';
import styles from './NoticeBoard.module.css';

const cx = classNames.bind(styles)

function NoticeBoard() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Thông báo</h1>
        </div>
    )
}

export default NoticeBoard;