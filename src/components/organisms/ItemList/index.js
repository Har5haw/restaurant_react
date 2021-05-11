import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Item from "../../molecules/Items/index";
import SearchBar from "../../atoms/SeachBar/index";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "93vh",
        width: "100%",
        overflowY: "hidden",
        backgroundColor: theme.palette.type === "dark" ? "grey" : "pink",
    },
    input: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(51, 63, 62)",
    },
    inputField: {
        width: "100%",
        margin: "20px 5vw",
        marginTop: "0px",
        height: "40px",
        background: theme.palette.type === "dark" ? "transparent" : "white",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        overflowY: "auto",
        height: "calc(90vh - 60px)",
    },
}));
const ItemsList = () => {
    const itemsData = useSelector((state) => state.itemsList);

    const [searchBarText, setSearchBarText] = useState("");

    const style = useStyles();

    let timer;

    const handleKeyUp = (event) => {
        clearTimeout(timer);
        timer = setTimeout(doneTypingItems.bind(null, event.target.value), 400);
    };

    const doneTypingItems = (searchText) => {
        setSearchBarText(searchText);
    };

    const drag = (event, data) => {
        event.dataTransfer.setData("itemId", data.id);
    };

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Item Name, by Course"
                    onKeyUp={handleKeyUp}
                    className={style.inputField}
                />
            </Box>
            <Box className={style.grid} aria-label="grid">
                {(
                    itemsData.filter(
                        (item) =>
                            item.itemName
                                .toLowerCase()
                                .includes(searchBarText.toLowerCase()) ||
                            item.course
                                .toLowerCase()
                                .includes(searchBarText.toLowerCase())
                    ) || itemsData
                ).map((element) => (
                    <Item
                        key={"item-" + element.id}
                        data={element}
                        draggable={true}
                        onDragStart={(event) => drag(event, element)}
                    ></Item>
                ))}
            </Box>
        </Box>
    );
};

export default ItemsList;
