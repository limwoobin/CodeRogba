import React , { memo } from 'react';
import Tr from './Tr';

const Table = memo(({ onClick , tableData , dispatch}) => {
    return (
        <table>
        {Array(tableData.length).fill().map((tr , i) => (<Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />))}
        </table>
    );
});

export default Table;