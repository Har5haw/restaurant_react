import Home from './components/templates/Home/index'
// import { ThemeProvider } from '@material-ui/styles';
// import baseTheme from './themes/index';
import './App.css'

function App() {
  const tableListData = [
    {
      tableName: "Harsha",
      totalItems: 20
    },
    {
      tableName: "Vardhan",
      totalItems: 20
    },
    {
      tableName: "Shaw",
      totalItems: 20
    },
    {
      tableName: "NObody",
      totalItems: 20
    },
    {
      tableName: "Jack Sparrow",
      totalItems: 20
    },
    {
      tableName: "Cat",
      totalItems: 20
    },
    {
      tableName: "Dog",
      totalItems: 20
    }
  ];

  const itemListData = [
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Dosa",
      itemPrice: 20
    },
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Vardhan",
      itemPrice: 20
    },
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Shaw",
      itemPrice: 20
    },
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "NObody",
      itemPrice: 20
    },
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Jack Sparrow",
      itemPrice: 20
    },
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Cat",
      itemPrice: 20
    },
    {
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Dog",
      itemPrice: 20
    }
  ];
  return (
    <div className="App">
      {/* <ThemeProvider theme={baseTheme}> */}
        <Home tableList={tableListData} itemList={itemListData} />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
