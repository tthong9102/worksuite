import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { DropdownButton, Dropdown } from 'react-bootstrap';

import styles from './Employees.module.css';
import Table from '../../components/Table';
import { bodyData } from '../../common/dataEmployee';

const cx = classNames.bind(styles)

// function handleEdit(row) {
//     console.log(row);
// }
// function Buttonn() {
//     return (
//         <button  >
//             <FontAwesomeIcon className={cx('action-icon')} icon={faEllipsisVertical} />
//         </button>
//     );
// }

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
                    <button onClick={e=> handleEdit(row.row.original)} id="dropdown-basic-button">
                        <FontAwesomeIcon className={cx('action-icon')} icon={faEllipsisVertical} />
                    </button>

                    {/* <Dropdown>
                        <Dropdown.Toggle className={cx('dropdown-toggle')}>
                            <button type='button'>
                                <FontAwesomeIcon className={cx('action-icon')} icon={faEllipsisVertical}/>
                            </button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    {/* <DropdownButton id="dropdown-basic-button" >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton> */}
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