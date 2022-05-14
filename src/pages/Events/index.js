import classNames from 'classnames/bind';
import styles from './Events.module.css';

const cx = classNames.bind(styles)

function Events() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Cuộc hẹn</h1>
        </div>
    )
}

export default Events;