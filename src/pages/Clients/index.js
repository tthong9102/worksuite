import classNames from 'classnames/bind';
import styles from './Clients.module.css';
import Table from '../../components/Table';
import { headerData, bodyData } from '../../common/util'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import GlobalFilter from '../../components/GlobalFilter';

const cx = classNames.bind(styles)

function Clients() {

    const columns = headerData;

    const data = bodyData;

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('page-name')}>Khách hàng</h1>
            <div className={cx('table-actions row')}>
                <div className={cx('col-6')}>
                    <button className={cx('add-btn')}>
                        <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                        Thêm khách hàng
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

export default Clients;