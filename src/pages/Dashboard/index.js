import classNames from 'classnames/bind';
import styles from './Dashboard.module.css';

const cx = classNames.bind(styles)

function Dashboard() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Trang chủ</h1>
        </div>
    )
}

export default Dashboard;