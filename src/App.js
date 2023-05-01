import Header from "./component/Header/Header";
import Product from "./component/Product/Product";
import Slider from "./component/Slider/Slider";
import Buyproduct from "./component/BuyProduct/Buyproduct";
import Home from "./component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="product" element={<Product />}/>
          <Route path="buyproduct" element={<Buyproduct />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
