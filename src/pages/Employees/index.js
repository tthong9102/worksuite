import classNames from 'classnames/bind';
import styles from './Employees.module.css';

import Table from '../../components/Table';
import { headerData, bodyData } from '../../common/dataEmployee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalFilter from '../../components/GlobalFilter';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Employees() {
    const columns = headerData;

    const data = bodyData;

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Nhân viên</h1>
            <div className={cx('table-actions row')}>
                <div className={cx('col-6')}>
                    <button className={cx('add-btn')}>
                        <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                        Thêm nhân viên
                    </button>
                </div>
                <div className={cx('col-6')}>
                    <GlobalFilter ></GlobalFilter>
                </div>
                
                
            </div>

            <div className={cx('inner')}>
                <Table columns={columns} data={data}></Table>
            </div>
        </div>
    )
}

export default Employees;