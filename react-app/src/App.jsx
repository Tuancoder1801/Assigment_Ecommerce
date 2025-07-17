import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminIndex } from "./admin/index";
import { AddProduct } from "./admin/products/addProduct";
import { ListProduct } from "./admin/products/listProduct";
import { UpdateProduct } from "./admin/products/updateProduct";

import { AddCustomer } from "./admin/Customers/addCustomer";
import { ListCustomer } from "./admin/Customers/listCustomer";
import { UpdateCustomer } from "./admin/Customers/updateCustomer";

import { Payment } from "./admin/payments/payment";

import { AddOrder } from "./admin/orders/addOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminIndex />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/list-product" element={<ListProduct />} />
        <Route path="/admin/update-product/:id" element={<UpdateProduct />} />

        <Route path="/admin/add-customer" element={<AddCustomer />} />
        <Route path="/admin/list-customer" element={<ListCustomer />} />
        <Route path="/admin/update-customer/:id" element={<UpdateCustomer />} />

        <Route path="/admin/add-order" element={<AddOrder />} />

        <Route path="/payment/:orderId" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
