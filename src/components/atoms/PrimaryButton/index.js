import React from "react";
import { Button } from "@material-ui/core";

const PrimaryButton = (props) => {
    return (
        <Button
            variant="contained"
            color="primary"
            disabled={props.disabled}
            onClick={props.onClick}
            size="medium"
        >
            {props.title}
        </Button>
    );
};

export default PrimaryButton;
