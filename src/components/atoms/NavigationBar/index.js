import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    nav: {
        height: "100%",
        width: "100%",
        background: "rgb(51, 63, 62)",
        color: "white",
        display: "flex",
        alignItems: "center",
    },
    title: {
        width: "30vw",
        textAlign: "center",
        fontSize: "46px",
        fontWeight: "bolder",
    },
}));

const NavigationBar = () => {
    const style = useStyle();
    return (
        <Box className={style.nav}>
            <Typography className={style.title}>ZeMoSo Restaurant</Typography>
        </Box>
    );
};

export default NavigationBar;
