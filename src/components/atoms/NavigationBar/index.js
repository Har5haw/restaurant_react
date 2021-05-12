import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import UserDetails from "../User/UserDetails";
import LoginButton from "../User/LoginButton";

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
    user: {
        width: "65vw",
        textAlign: "end",
        fontSize: "20px",
        fontWeight: "bolder",
        marginRight: "5vw",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    login: {
        border: "1px solid white",
    },
}));

const NavigationBar = (props) => {
    const style = useStyle();
    return (
        <Box className={style.nav}>
            <Typography className={style.title}>ZeMoSo Restaurant</Typography>
            {props.isLoading || props.isAuthenticated ? (
                <UserDetails
                    isAuthenticated={props.isAuthenticated}
                    user={props.user}
                    logout={props.logout}
                />
            ) : (
                <LoginButton login={props.login} />
            )}
        </Box>
    );
};

export default NavigationBar;
