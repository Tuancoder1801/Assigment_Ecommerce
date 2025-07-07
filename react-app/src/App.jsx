import "./App.css";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { AdminIndex } from "./admin/index";
import { AddProduct } from "./admin/products/addProduct";
import { ListProduct } from "./admin/products/listProduct";
import { UpdateProduct } from "./admin/products/updateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminIndex />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/list-product" element={<ListProduct />} />
        <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
