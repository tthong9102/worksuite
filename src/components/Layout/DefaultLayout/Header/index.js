import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css'
import { faBell, faCirclePlus, faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-right')}>
                <ul>
                    <li>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                        </button>
                    </li>
                    <li>
                        <button className={cx('plus-btn')}>
                            <FontAwesomeIcon className={cx('plus-icon')} icon={faCirclePlus} />
                        </button>
                    </li>
                    <li>
                        <button className={cx('bell-btn')}>
                            <FontAwesomeIcon className={cx('bell-icon')} icon={faBell} />
                        </button>
                    </li>
                    <li>
                        <button className={cx('power-off-btn')}>
                            <FontAwesomeIcon className={cx('power-off-icon')} icon={faPowerOff} />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;