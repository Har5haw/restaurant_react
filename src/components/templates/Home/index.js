import React from "react";
import TableList from "../../organisms/TablesList/index";
import ItemList from "../../organisms/ItemList/index";
import { Box, makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    nav: {
        height: "7vh",
        width: "100%",
        background: "rgb(51, 63, 62)",
        color: "white",
        fontSize: "46px",
        display: "flex",
        alignItems: "center",
        fontWeight: "bolder",
    },
    title: { width: "30vw", textAlign: "center" },
    body: { display: "flex", height: "93vh" },
}));

const HomeTemplate = (props) => {
    const style = styles();
    return (
        <Box className={style.root}>
            <Box className={style.nav}>
                <Box className={style.title}>ZeMoSo Restaurant</Box>
            </Box>
            <Box className={style.body}>
                <TableList list={props.tableList} />
                <ItemList list={props.itemList} />
            </Box>
        </Box>
    );
};

export default HomeTemplate;
