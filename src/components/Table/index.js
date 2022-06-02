import classNames from 'classnames/bind';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';

import styles from './Table.module.css';
import GlobalFilter from '../GlobalFilter';

const cx = classNames.bind(styles)

function Table ({columns, data}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,

        // Lọc dữ liệu
        state,
        setGlobalFilter,

        // Phân trang
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        pageOptions,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    )
    
    const { globalFilter } = state

    return (
        <>
        {/* Lọc dữ liệu của table*/}
        <div className={cx('search')}>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        </div>

        {/* Table */}
        <div className={cx('table-ui')}>
            <table {...getTableProps()} className={cx('table')}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? <span> &#8595;</span>
                                        : <span> &#8593;</span>
                                        : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}><p>{cell.render('Cell')}</p></td>
                        })}
                        </tr>
                        
                    )
                    })}
                    
                </tbody>
            </table>

            {/* UI phân trang */}
            <div className={cx('pagination')}>
                <span>
                    Trang{' '}
                    <strong>
                        {pageIndex + 1} của {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} className={cx('previousPage')}>
                    Trước
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage} className={cx('nextPage')}>
                    Sau
                </button>
            </div>
        </div>
        </>
    );
}

export default Table;