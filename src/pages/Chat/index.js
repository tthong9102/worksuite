import classNames from 'classnames/bind';
import styles from './Chat.module.css';

const cx = classNames.bind(styles)

function Chat() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Chat</h1>
        </div>
    )
}

export default Chat;