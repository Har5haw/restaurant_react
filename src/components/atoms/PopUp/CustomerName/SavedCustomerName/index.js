import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

SavedCustomerName.propTypes = {
    customerName: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired,
    labelHead: PropTypes.string.isRequired,
};

const useStyle = makeStyles(() => ({
    root: {
        width: "1005",
        display: "flex",
        justifyContent: "space-between",
        height: "45px",
        marginBottom: "20px",
    },
}));

function SavedCustomerName(props) {
    const style = useStyle();

    return (
        <Box className={style.root}>
            <Typography>
                {props.labelHead}: {props.customerName}
            </Typography>
            <Edit style={{ cursor: "pointer" }} onClick={props.onEditClick} />
        </Box>
    );
}

export default SavedCustomerName;
