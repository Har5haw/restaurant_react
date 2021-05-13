import React from "react";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    nav: {
        height: "10vh",
        [theme.breakpoints.down("sm")]: {
            height: "20vh",
        },
    },
    title: {
        width: "30vw",
        textAlign: "center",
    },
    body: {
        display: "flex",
        height: "90vh",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            height: "80vh",
        },
    },
    tableList: {
        width: "30vw",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
        },
    },
    itemList: {
        width: "70vw",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
        },
    },
}));

const HomeTemplate = (props) => {
    const style = styles();

    return props.isLoading ? (
        <Box className={style.root}>
            <CircularProgress style={{ height: "50px", width: "50px" }} />
        </Box>
    ) : (
        <Box className={style.root}>
            <Box className={style.nav}>{props.navigationBarComponent}</Box>
            <Box className={style.body}>
                <Box className={style.tableList}>
                    {props.tableListComponent}
                </Box>
                <Box className={style.itemList}>{props.itemListComponent}</Box>
            </Box>
        </Box>
    );
};

HomeTemplate.propsType = {
    navigationBarComponent: PropTypes.element.isRequired,
    itemListComponent: PropTypes.element.isRequired,
    tableListComponent: PropTypes.element.isRequired,
};

export default HomeTemplate;
