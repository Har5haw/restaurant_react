import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Item from '../../molecules/Items/index';
import SearchBar from '../../atoms/SeachBar/index';

const useStyles = makeStyles((theme) => (
    {
        root: {
            height: "100vh",
            backgroundColor: "white",
            width: "70vw",
            overflowY: "hidden"
        },
        input: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        inputField: {
            width: "100%",
            margin: "20px 5vw",
            height: "50px"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            overflowY: "auto",
            height: "calc(100vh - 90px)"
        }
    })
);
const ItemsList = (props) => {

    //let [items, setItems] = useState([...props.list]);
    const style = useStyles();
    let timer;
    let search_item_text = "";

    const handleKeyUp = (event) => {
        search_item_text = event.target.value;;
        clearTimeout(timer);
        timer = setTimeout(doneTypingItems, 400);
    };

    const doneTypingItems = () => {
        if (search_item_text.length > 0) {
            setItems(props.list.filter((item) => item.itemName.toLowerCase().includes(search_item_text)));
        } else {
setItems([...props.list]);
        }
};

    const drag = (event, data) => {
        event.dataTransfer.setData("id", event.target.id);
        event.dataTransfer.setData("itemData", JSON.stringify(data));
    };


    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar placeholder="Search by Item Name, by Course" onKeyUp={handleKeyUp} className={style.inputField} />
            </Box>
            <Box className={style.grid}>
                {
                    props.list.map((element) => (
                        <Item id={"item-" + element.id} key={"item-" + element.id} {...element} draggable={true} onDragStart={(event) => drag(event, element)}></Item>
                    ))
                }
            </Box>
        </Box>
    );
};

export default ItemsList;