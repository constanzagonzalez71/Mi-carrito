import Navbar from"./components/layouts/navBar/NavBar";
import Cart from "./components/pages/cart/Cart";
import CartCompras from "./components/pages/cartCompras/Cart.Compras";
import Checkout from "./components/pages/checkout/Checkout";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/layouts/footer/Footer"; 
import ProductCard from "./components/common/productCard/ProductCard";
import RopaBebes from "./components/pages/ropaBebes/RopaBebes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/category/:name/:id" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartCompras" element={<CartCompras />} />
        <Route path="/productos/:categoria" element={<RopaBebes />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;




