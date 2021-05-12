import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        alignItems: "start",
    },
    contentContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "start",
    },
}));
import PropTypes from "prop-types";

const TableName = (props) => {
    const style = styles();
    return (
        <Box className={style.root}>
            <Box className={style.contentContainer}>
                <Typography style={{ margin: "0 0 0 2.5vw" }}>
                    <strong> TableNo: </strong>
                </Typography>
                <Typography style={{ margin: "0 0 0 2.5vw" }}>
                    <strong> Items: </strong>
                </Typography>
                <Typography style={{ margin: "0 0 0 2.5vw" }}>
                    <strong> Price: </strong>
                </Typography>
                <Typography style={{ margin: "0 0 0 2.5vw" }}>
                    <strong> Reserved: </strong>
                </Typography>
            </Box>
            <Box className={style.contentContainer}>
                <Typography style={{ margin: "0 0 0 1vw" }}>
                    {props.id + 1}
                </Typography>
                <Typography style={{ margin: "0 0 0 1vw" }}>
                    {props.totalItems}
                </Typography>
                <Typography style={{ margin: "0 0 0 1vw" }}>
                    {props.totalPrice} /-
                </Typography>
                <Typography style={{ margin: "0 0 0 1vw" }}>
                    {props.tableName || "No One"}
                </Typography>
            </Box>
        </Box>
    );
};

TableName.propsType = {
    tableName: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default TableName;
