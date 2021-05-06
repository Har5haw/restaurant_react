import React from 'react';
import PrimaryCard from '../../atoms/PrimaryCard/index';
import TableName from '../../atoms/TableAtoms/TableName/index';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Person } from '@material-ui/icons'

const styles = makeStyles(() => (
    {
        root: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            borderRadius: "10px",
            color: "black",
            width: "20vw",
            height: "5vw",
            margin: "2vw auto"
        },
        iconContainer: {
            backgroundColor: "blue",
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        icon: {
            color: "white",
            height: "50%",
            width: "50%"
        },
        container: {
            width: "70%",
            height: "100%"
        }
    }
)
);

const Table = (props) => {

    const style = styles();

    return (
        <PrimaryCard className={style.root}>
            <Box className={style.iconContainer}>
                <Person className={style.icon} />
            </Box>
            <Box className={style.container}>
                <TableName tableName={props.tableName} totalItems={props.totalItems} />
            </Box>
        </PrimaryCard>
    );
}

export default Table;