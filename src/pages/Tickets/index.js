import classNames from 'classnames/bind';
import styles from './Tickets.module.css';

const cx = classNames.bind(styles)

function Tickets() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Hỗ trợ</h1>
        </div>
    )
}

export default Tickets;