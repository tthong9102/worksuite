import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEye, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';

import styles from './Employees.module.css';
import Table from '../../components/Table';
import { bodyData } from '../../common/dataEmployee';

const cx = classNames.bind(styles)

function Employees() {
    
    // headerData
    const columns = [
        {
            Header: "#",
            accessor: "id",
          },
          {
            Header: "Nội dung",
            accessor: "content",
          },
          {
            Header: "Ngày tạo",
            accessor: "dateCreated",
          },
          {
            Header: "Người nhận",
            accessor: "receiver",
          },
          {
            Header: "Hành động",
            accessor: "action",
            
            Cell: row => (
                <div className={cx('action')}>
                    <Dropdown>
                        <Dropdown.Toggle  type='button' className={cx('dropdown-toggle')}>
                            <FontAwesomeIcon className={cx('action-icon')} icon={faEllipsisVertical}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <FontAwesomeIcon className={cx('view-icon')} icon={faEye}/>
                                <p>Xem</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <FontAwesomeIcon className={cx('edit-icon')} icon={faPenToSquare}/>
                                <p>Chỉnh sửa</p>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <FontAwesomeIcon className={cx('delete-icon')} icon={faTrash}/>
                                <p>Xóa</p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            ),
        },
    ];

    // function handleEdit(row) {
    //     console.log(row);
    // }

    // bodyData
    const data = bodyData;

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Nhân viên</h1>
            <div className={cx('table-actions')}>
                <button className={cx('add-btn')}>
                    <FontAwesomeIcon
                    Icon className={cx('plus-icon')} icon={faPlus} />
                    Thêm nhân viên
                </button>
            </div>
            <div className={cx('inner')}>
                <Table columns={columns} data={data}></Table>
            </div>
        </div>
    )
}

export default Employees;