import classNames from 'classnames/bind';
import styles from './Tickets.module.css';

import Table from '../../components/Table';
import { headerData, bodyData } from '../../common/dataTicket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Tickets() {
    const columns = headerData;

    const data = bodyData;
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Hỗ trợ</h1>
           {/* Code bảng danh sách yêu cầu hỗ trợ*/}
           <div className={cx('table-actions')}>
                <button className={cx('add-btn')}>
                    <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                    Thêm hỗ trợ
                </button>
            </div>
            <div className={cx('inner')}>
                <Table columns={columns} data={data}></Table>
            </div>
        </div>
    )
}

export default Tickets;