import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './GlobalFilter.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

function GlobalFilter({ filter, setFilter }) {
    return (
        <div className={cx('input-group')}>
            <button className={cx('btn')}>
                <FontAwesomeIcon icon={faSearch} className={cx('search-icon')}/>
            </button>
            <div className={cx('form-outline')}>
                <input
                    value={filter || ""}
                    onChange={e => {
                    setFilter(e.target.value);
                    }} 
                    type="search"
                    id="formSearch" 
                    className={cx('form-control')}
                    placeholder = "Nhập để tìm kiếm"
                />
            </div>
        </div>
    );
}

export default GlobalFilter;