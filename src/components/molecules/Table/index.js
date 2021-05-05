import React from 'react';
import PrimaryCard from '../../atoms/PrimaryCard/index';
import TableName from '../../atoms/TableName/index';
import TableItems from '../../atoms/TableItems/index';

const Table = (props) => {
    return (
        <PrimaryCard>
            <TableName tableName={props.tableName} />
            <TableItems totalItems={props.totalItems} />
        </PrimaryCard>
    );
}

export default Table;