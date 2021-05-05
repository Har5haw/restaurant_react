import React from 'react';
import { Box } from '@material-ui/core'
import { Person } from '@material-ui/icons'

const TableName = (props) => {
    return (
        <Box><Person color="primary" />  {props.tableName}</Box>
    );
}

export default TableName;