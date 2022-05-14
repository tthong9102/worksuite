import classNames from 'classnames/bind';
import styles from './Employees.module.css';

const cx = classNames.bind(styles)

function Employees() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Nhân viên</h1>
        </div>
    )
}

export default Employees;