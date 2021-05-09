import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import baseTheme from "./themes/index";

const tableListData = require("./data/tables.json");

const itemListData = require("./data/items.json");

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={baseTheme}>
                <HomePage tableList={tableListData} itemList={itemListData} />
            </ThemeProvider>
        </div>
    );
}

export default App;
