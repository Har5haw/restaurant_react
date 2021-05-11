import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

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
    username: {
        fontSize: "20px",
        fontWeight: "bolder",
        marginRight: "1vw",
    },
    email: {
        fontSize: "15px",
        fontWeight: "normal",
        marginRight: "1vw",
        color: "lightgrey",
    },
    image: {
        height: "50px",
        width: "50px",
        marginRight: "10px",
        borderRadius: "25px",
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
            {props.isAuthenticated ? (
                <Box className={style.user}>
                    <img className={style.image} src={props.user.picture} />
                    <Box>
                        <Typography className={style.username}>
                            {props.user.name}
                        </Typography>
                        <Typography className={style.email}>
                            {props.user.email}
                        </Typography>
                    </Box>
                    <Button
                        className={style.login}
                        onClick={() => props.logout()}
                    >
                        <Typography style={{ color: "white" }}>
                            Logout
                        </Typography>
                    </Button>
                </Box>
            ) : props.isLoading ? (
                <Typography className={style.user}>Loading...</Typography>
            ) : (
                <Box className={style.user}>
                    <Button
                        className={style.login}
                        onClick={() => props.login()}
                    >
                        <Typography style={{ color: "white" }}>
                            Login
                        </Typography>
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default NavigationBar;
