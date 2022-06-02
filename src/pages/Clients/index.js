import classNames from 'classnames/bind';
import styles from './Clients.module.css';
import Table from '../../components/Table';
import { headerData, bodyData } from '../../common/dataClient'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

function Clients() {

    // headerData
    const columns = [
        {
            Header: '#',
            accessor: 'id',
        },
        {
            Header: 'Họ và tên',
            accessor: 'name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Số điện thoại',
            accessor: 'phone',
        },
        {
            Header: 'Ngày tham gia',
            accessor: 'date',
        },
        {
            Header: "Hành động",
            accessor: "action",
            Cell: row => (
              <div className={cx('action')}>
                    <button onClick={e=> handleEdit(row.row.original)} >
                        <FontAwesomeIcon className={cx('action-icon')} icon={faEllipsisVertical} />
                    </button>
              </div>
              ),
          },
    ];

    function handleEdit(row) {
        console.log(row);
    }

    // bodyData
    const data = bodyData;

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Khách hàng</h1>
            <div className={cx('table-actions')}>
                <button className={cx('add-btn')}>
                    <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                    Thêm khách hàng
                </button>
            </div>
            <div className={cx('inner')}>
                <Table columns={columns} data={data}></Table>
            </div>
        </div>
    )
}

export default Clients;