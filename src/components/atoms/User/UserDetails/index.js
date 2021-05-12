import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(() => ({
    user: {
        width: "65vw",
        textAlign: "end",
        fontSize: "20px",
        fontWeight: "bolder",
        marginRight: "5vw",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        cursor: "pointer",
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

UserDetails.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
};

function UserDetails(props) {
    const style = useStyle();

    const history = useHistory();

    return props.isAuthenticated ? (
        <Box className={style.user}>
            <Box
                onClick={() => history.push("/profile")}
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img className={style.image} src={props.user.picture} />
                <Box>
                    <Typography className={style.username}>
                        {props.user.name}
                    </Typography>
                    <Typography className={style.email}>
                        {props.user.email}
                    </Typography>
                </Box>
            </Box>
            <Button className={style.login} onClick={() => props.logout()}>
                <Typography style={{ color: "white" }}>Logout</Typography>
            </Button>
        </Box>
    ) : (
        <Typography className={style.user}>Loading...</Typography>
    );
}

export default UserDetails;
