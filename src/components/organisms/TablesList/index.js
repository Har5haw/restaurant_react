import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Table from '../../molecules/Table';
import SearchBar from '../../atoms/SeachBar/index'

const useStyles = makeStyles(() => (
    {
        root: {
            height: "100vh",
            backgroundColor: "white",
            width: "25vw",
            overflow: "hidden"
        },
        input: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        inputField: {
            width: "20vw",
            margin: "20px 0px",
            height: "50px"
        },
        list: {
            height: "calc(100vh - 90px)",
            overflowY: "auto"
        }
    })
);
const TablesList = (props) => {

    const [tables, setTables] = useState([...props.list]);

    const style = useStyles();
    var timer;
    let search_table_text = "";

    const handleKeyUp = (event) => {
        let val = event.target.value;
        search_table_text = val;
        clearTimeout(timer);
        timer = setTimeout(doneTypingTables, 400);
    }

    const doneTypingTables = () => {
        if (search_table_text.length > 0) {
            let searchResult = tables.filter((table) => table.tableName.toLowerCase().includes(search_table_text))
            setTables(searchResult);
        } else {
            setTables([...props.list]);
        }
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }

    const addItem = (index, item) => {
        let copy = [...tables];
        copy[index].totalItems += 1;
        copy[index].items.push({ id: item.id, servings: 1 });
        copy[index].totalPrice = copy[index].totalPrice + item.itemPrice;
        setTables(copy);
    }

    useEffect(() => {
        console.log("render")
    });

    const drop = (event, index) => {
        event.preventDefault();
        addItem(index, JSON.parse(event.dataTransfer.getData("itemData")));
    }

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Table Name"
                    onKeyUp={handleKeyUp}
                    className={style.inputField}
                />
            </Box>
            <Box className={style.list}>
                {
                    tables.map((element, index) => (
                        <Table
                            id={"table-" + index}
                            key={"table-" + index}
                            onDragOver={allowDrop}
                            onDrop={(event) => drop(event, index)}
                            {...element}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default TablesList;