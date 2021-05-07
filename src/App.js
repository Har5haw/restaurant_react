import Home from './components/templates/Home/index'
// import { ThemeProvider } from '@material-ui/styles';
// import baseTheme from './themes/index';
import './App.css'


const tableListData = require("./data/tables.json")

const itemListData = require("./data/items.json")

function App() {

  return (
    <div className="App">
      {/* <ThemeProvider theme={baseTheme}> */}
      <Home tableList={tableListData} itemList={itemListData} />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
