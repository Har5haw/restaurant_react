import React from 'react';
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => (
    {
        root: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            alignItems: "start",
            fontFamily: "'Hanalei Fill', cursive"
        },
        contentContainer: {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "start",
        }
    }
)
);

const TableName = (props) => {

    const style = styles();
    return (
        <Box className={style.root}>
            <Box className={style.contentContainer}>
                <Box style={{ marginLeft: "20px" }}><strong>Table Name: </strong></Box>
                <Box style={{ marginLeft: "20px" }}><strong>Total Items: </strong></Box>
                <Box style={{ marginLeft: "20px" }}><strong>Total Price: </strong></Box>
            </Box>
            <Box className={style.contentContainer}>
                <Box style={{ marginLeft: "10px" }}>{props.tableName} </Box>
                <Box style={{ marginLeft: "10px" }}>{props.totalItems} </Box>
                <Box style={{ marginLeft: "10px" }}>{props.totalPrice} </Box>
            </Box>
        </Box>
    );
}

export default TableName;