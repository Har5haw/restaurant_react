import React from "react";
import TableName from "../../atoms/TableAtoms/TableName/index";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        borderRadius: "20px",
        width: "25vw",
        height: "8vw",
        margin: "3vw auto",
        cursor: "pointer",
    },
    iconContainer: {
        width: "35%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    container: {
        width: "65%",
        height: "100%",
    },
}));

const Table = (props) => {
    const style = styles();

    return (
        <Card raised={true} className={style.root} {...props}>
            <Box className={style.iconContainer}>
                <img
                    src="https://img.freepik.com/free-vector/top-view-lamb-beef-steak_1308-15475.jpg?size=626&ext=jpg"
                    alt="No"
                    className={style.icon}
                />
            </Box>
            <Box className={style.container}>
                <TableName {...props.data} />
            </Box>
        </Card>
    );
};

export default Table;
