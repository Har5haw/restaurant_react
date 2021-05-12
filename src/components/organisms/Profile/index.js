import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, OutlinedInput, Typography } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import CustomerNameMolecule from "../../molecules/customerName";
import EditableLabel from "../EditableLabel";

ProfileComponent.propTypes = {};

const useStyle = makeStyles({
    root: {
        width: "100%",
        height: "100%",
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    navBottom: {
        height: "60px",
        background: "rgb(51, 63, 62)",
        width: "100%",
    },
    profilePicture: {
        height: "10vw",
        width: "10vw",
        borderRadius: "5vw",
        margin: "10px",
    },
});

function ProfileComponent(props) {
    const style = useStyle();

    const { user } = useAuth0();

    return (
        <Box className={style.root}>
            <Box className={style.navBottom} />

            <Box className={style.content}>
                {user ? (
                    <Box className={style.content}>
                        <img
                            src={user.picture}
                            className={style.profilePicture}
                        />
                        <Typography variant="subtitle1">
                            Hello! {user.name}
                        </Typography>
                        <Typography variant="subtitle2">
                            {user.email}
                        </Typography>
                        <Box style={{ height: "50px" }} />

                        <Box style={{ width: "20vw" }}>
                            <EditableLabel
                                labelText="9090909090"
                                onSave={() => {}}
                                labelHead="Phone No"
                            />
                        </Box>
                        <Box style={{ width: "20vw" }}>
                            <EditableLabel
                                labelText={21}
                                onSave={() => {}}
                                labelHead="Age"
                            />
                        </Box>
                        <Box style={{ width: "20vw" }}>
                            <EditableLabel
                                labelText="Male"
                                onSave={() => {}}
                                labelHead="Gender"
                            />
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="subtitle1">Loading...</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default ProfileComponent;
