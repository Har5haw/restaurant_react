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

const ItemName = (props) => {
    const style = styles();
    return (
        <Box className={style.root}>
            <Box className={style.contentContainer}>
                <Typography style={{ marginLeft: "30px" }}>
                    <strong> Name: </strong>
                </Typography>
                <Typography style={{ marginLeft: "30px" }}>
                    <strong> Price: </strong>
                </Typography>
            </Box>
            <Box className={style.contentContainer}>
                <Typography style={{ marginLeft: "10px" }}>
                    {props.itemName}
                </Typography>
                <Typography style={{ marginLeft: "10px" }}>
                    {props.itemPrice} /-
                </Typography>
            </Box>
        </Box>
    );
};

export default ItemName;
