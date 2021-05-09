import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    nav: {
        height: "100%",
        width: "100%",
        background: "rgb(51, 63, 62)",
        color: "white",
        fontSize: "46px",
        display: "flex",
        alignItems: "center",
        fontWeight: "bolder",
    },
    title: {
        width: "30vw",
        textAlign: "center",
    },
}));

const NavigationBar = (props) => {
    const style = useStyle();
    return (
        <Box className={style.nav}>
            <Box className={style.title}>ZeMoSo Restaurant</Box>
        </Box>
    );
};

export default NavigationBar;
