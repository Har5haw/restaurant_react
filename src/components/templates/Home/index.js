import React from 'react';
import TableList from '../../organisms/TablesList/index';
import ItemList from '../../organisms/ItemList/index';
import { Box } from '@material-ui/core';

const HomeTemplate = (props) => {
    return (
        <Box style={{display: "flex", height: "100vh"}}>
            <TableList list={props.tableList} />
            <ItemList list={props.itemList} />
        </Box>
    )
}

export default HomeTemplate;