import React from 'react';
import PrimaryCard from '../../atoms/PrimaryCard/index';
import TableName from '../../atoms/TableAtoms/TableName/index';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const styles = makeStyles(() => (
    {
        root: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            borderRadius: "20px",
            color: "black",
            width: "25vw",
            height: "8vw",
            margin: "50px auto",
            cursor: "pointer"
        },
        iconContainer: {
            backgroundColor: "blue",
            width: "35%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        icon: {
            color: "white",
            height: "100%",
            width: "100%",
            objectFit: "cover"
        },
        container: {
            width: "65%",
            height: "100%"
        }
    }
)
);

const Table = (props) => {

    const style = styles();

    return (
        <PrimaryCard className={style.root} {...props}>
            <Box className={style.iconContainer}>
                <img src="https://img.freepik.com/free-vector/top-view-lamb-beef-steak_1308-15475.jpg?size=626&ext=jpg" alt="No" className={style.icon}/>
            </Box>
            <Box className={style.container}>
                <TableName {...props} />
</Box>
        </PrimaryCard>
    );
};

export default Table;