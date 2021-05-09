import React from "react";
import ItemName from "../../atoms/ItemAtoms/ItemName/index";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        color: "black",
        width: "19vw",
        height: "calc(16vw + 50px)",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        marginBottom: "0px",
    },
    iconContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "15vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color: "white",
        height: "calc(11vw + 60px)",
        width: "100%",
        objectFit: "cover",
    },
    container: {
        width: "100%",
        height: "calc(5vw + 10px)",
    },
}));

const Item = (props) => {
    const style = styles();

    return (
        <Card raised={true} className={style.root} {...props}>
            <Box className={style.iconContainer}>
                <img
                    src={props.data.image}
                    className={style.icon}
                    alt="No"
                    draggable={false}
                />
            </Box>
            <Box className={style.container}>
                <ItemName {...props.data} />
            </Box>
        </Card>
    );
};

export default Item;
