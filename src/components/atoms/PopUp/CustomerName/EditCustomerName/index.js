import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles, OutlinedInput } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

EditCustomerName.propTypes = {
    onCustomerNameChange: PropTypes.func.isRequired,
    saveCustomerName: PropTypes.func.isRequired,
    customerName: PropTypes.string.isRequired,
};

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "45px",
        marginBottom: "20px",
    },
}));

function EditCustomerName(props) {
    const style = useStyles();

    return (
        <Box className={style.root}>
            <OutlinedInput
                fullWidth
                onChange={props.onCustomerNameChange}
                defaultValue={props.customerName}
                placeholder="Customer Name"
            />
            <Button onClick={props.saveCustomerName}>Save</Button>
        </Box>
    );
}

export default EditCustomerName;
