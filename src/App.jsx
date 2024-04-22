import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ProductProvider } from "./context/ProductContext";
import Layout from "./service/Layout";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          >
            <Route path="/" element={<Homepage searchTerm={searchTerm} />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/login" element={<LoginPage replace />} />
          <Route path="/shopping" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
