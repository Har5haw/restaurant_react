import React from 'react';
import PrimaryCard from '../../atoms/PrimaryCard/index';
import ItemName from '../../atoms/ItemAtoms/ItemName/index';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const styles = makeStyles(() => (
    {
        root: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            color: "black",
            width: "18vw",
            height: "18vw",
            margin: "50px auto"
        },
        iconContainer: {
            backgroundColor: "white",
            width: "100%",
            height: "15vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        icon: {
            color: "white",
            height: "100%",
            width: "100%",
            objectFit: "cover"

        },
        container: {
            width: "100%",
            height: "5vw"
        }
    }
)
);

const Item = (props) => {

    const style = styles();

    return (
        <PrimaryCard className={style.root} {...props}>
            <Box className={style.iconContainer}>
                <img src={props.image} className={style.icon} alt="No" draggable={false} />
            </Box>
            <Box className={style.container}>
                <ItemName {...props} />
            </Box>
        </PrimaryCard>
    );
}

export default Item;