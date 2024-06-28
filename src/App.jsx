import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
import ShoppingCart from "./pages/ShoppingCartPage";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./service/ProtectedRoute";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            <Route element={<ProtectedRoute />}>
              <Route
                element={
                  <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                }
              >
                <Route path="/" element={<Homepage searchTerm={searchTerm} />} />
                <Route
                  path="/products"
                  element={<AllProducts searchTerm={searchTerm} />}
                />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shopping" element={<ShoppingCart />} />
              </Route>
            </Route>
            
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
