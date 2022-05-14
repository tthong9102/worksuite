import classNames from 'classnames/bind';
import Header from "./Header";
import styles from './DefaultLayout.module.css';
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            
        </div>
    );
}

export default DefaultLayout;