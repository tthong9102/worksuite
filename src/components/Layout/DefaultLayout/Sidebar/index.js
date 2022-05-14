import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import ReactShadowScroll from 'react-shadow-scroll';

import styles from './Sidebar.module.css';
import { faBuildingUser, faCalendar, faComment, faHeadset, faHome, faSquarePollHorizontal, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-brand')}>
                <h1 className={cx('brand-name')}>Worksuite</h1>
                <div className={cx('pro-name')}>
                    <div className={cx('rounded-circle')}></div>
                    <p>Quản lý</p>
                </div>
            </div>
            <div className={cx('sidebar-menu')} >
                
                <ul>
                    <li>
                        <Link to='/'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faHome} />
                            <p>Trang chủ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/clients'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faBuildingUser} />
                            <p>Khách hàng</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/employees'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faUserGroup} />
                            <p>Nhân viên</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/tickets'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faHeadset} />
                            <p>Hỗ trợ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/events'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faCalendar} />
                            <p>Cuộc hẹn</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/notice'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faSquarePollHorizontal} />
                            <p>Thông báo</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/chat'>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faComment} />
                            <p>Chat</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;