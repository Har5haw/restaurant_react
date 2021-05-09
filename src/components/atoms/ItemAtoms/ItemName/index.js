import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
    root: {
        backgroundColor: "white",
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
                <Box style={{ marginLeft: "30px" }}>
                    <strong> Name: </strong>
                </Box>
                <Box style={{ marginLeft: "30px" }}>
                    <strong> Price: </strong>
                </Box>
            </Box>
            <Box className={style.contentContainer}>
                <Box style={{ marginLeft: "10px" }}>{props.itemName} </Box>
                <Box style={{ marginLeft: "10px" }}>{props.itemPrice} /- </Box>
            </Box>
        </Box>
    );
};

export default ItemName;
