import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Box,
} from "@material-ui/core";
import PropTypes from "prop-types";

const PopUp = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close} maxWidth={"xl"}>
            <DialogTitle>
                <Typography variant="h2">
                    Table Number: {props.tableName + 1}
                </Typography>
            </DialogTitle>
            <DialogContent dividers>{props.children}</DialogContent>
            <DialogContent>
                <Typography>Total Amount: {props.totalPrice}</Typography>
                <Typography variant="subtitle2">
                    Waiter Name: {props.user}
                </Typography>
            </DialogContent>
            <DialogActions>
                {props.editable ? (
                    <Button
                        onClick={props.closeServings}
                        color="primary"
                        disabled={!props.showCloseServings}
                    >
                        <Typography>Close Servings</Typography>
                    </Button>
                ) : (
                    <Box />
                )}
                <Button onClick={props.close} color="primary">
                    <Typography>Close</Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
};

PopUp.propsType = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    tableName: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
};

export default PopUp;
