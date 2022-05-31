import classNames from 'classnames/bind';
import styles from './Table.module.css';
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import GlobalFilter from '../GlobalFilter';

const cx = classNames.bind(styles)

function Table ({columns, data}) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    )

    return (
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
            {rows.map((row, i) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                </tr>
            )
            })}
        </tbody>
        </table>
    );
}

export default Table;