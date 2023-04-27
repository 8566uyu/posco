import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProbStudent from "./pages/ProbStudent";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./styles/Common.scss";
import ProductItem from "./components/ProductItem";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setProducts(res.data.slice(0, 10));
    };

    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 실습 */}
          <Route path="/student/:name" element={<ProbStudent />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
