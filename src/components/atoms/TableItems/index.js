import React from 'react';
import { Box } from '@material-ui/core';

const TableItems = (props) => {
    return (
        <Box>Total items: {props.totalItems} </Box>
    );
};

export default TableItems;