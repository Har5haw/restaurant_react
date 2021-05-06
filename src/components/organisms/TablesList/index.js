import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Table from '../../molecules/Table';
import SearchBar from '../../atoms/SeachBar/index'

const useStyles = makeStyles((theme) => (
    {
        root: {
            height: "100vh",
            backgroundColor: "white",
            width: "25vw",
            overflowY: "auto"
        },
        input: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0px"
        },
        inputField: {
            width: "20vw"
        }
    })
);
const TablesList = (props) => {

    let [tables, setTables] = useState([...props.list]);

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
            let searchResult = props.list.filter((table) => table.tableName.toLowerCase().includes(search_table_text))
            setTables(searchResult);
        } else {
            setTables([...props.list]);
        }
    }

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar placeholder="Search by Table Name" onKeyUp={handleKeyUp} className={style.inputField} />
            </Box>
            <Box>
                {
                    tables.map((element, index) => (
                        <Table key={index} tableName={element.tableName} totalItems={element.totalItems}></Table>
                    ))
                }
            </Box>
        </Box>
    )
}

export default TablesList;