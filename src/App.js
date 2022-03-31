import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetail from "./containers/ProductDetails";

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;