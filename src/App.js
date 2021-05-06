import Home from './components/templates/Home/index'
// import { ThemeProvider } from '@material-ui/styles';
// import baseTheme from './themes/index';
import './App.css'

function App() {
  const tableListData = [
    {
      tableName: "Harsha",
      totalItems: 0,
      totalPrice: 0,
      items: []
    },
    {
      tableName: "Vardhan",
      totalItems: 0,
      totalPrice: 0,
      items: []
    },
    {
      tableName: "Shaw",
      totalItems: 0,
      totalPrice: 0,
      items: []
    },
    {
      tableName: "NObody",
      totalItems: 0,
      totalPrice: 0,
      items: []
    },
    {
      tableName: "Jack Sparrow",
      totalItems: 0,
      totalPrice: 0,
      items: []
    },
    {
      tableName: "Cat",
      totalItems: 0,
      totalPrice: 0,
      items: []
    },
    {
      tableName: "Dog",
      totalItems: 0,
      totalPrice: 0,
      items: []
    }
  ];

  const itemListData = [
    {
      id: 1,
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Dosa",
      itemPrice: 20
    },
    {
      id: 2,
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Vardhan",
      itemPrice: 20
    },
    {
      id: 3,
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Shaw",
      itemPrice: 20
    },
    {
      id: 4,
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "NObody",
      itemPrice: 20
    },
    {
      id: 5,
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Jack Sparrow",
      itemPrice: 20
    },
    {
      id: 6,
      image: "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
      itemName: "Cat",
      itemPrice: 20
    },
    {
      id: 7,
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
