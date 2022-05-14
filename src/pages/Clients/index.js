import classNames from 'classnames/bind';
import styles from './Clients.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Clients() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Khách hàng</h1>
            <button className={cx('add-btn')}>
                <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                Thêm khách hàng
            </button>
            <div className={cx('inner')}>

            </div>
        </div>
    )
}

export default Clients;