const axios = require('axios');
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

exports.getAllProducts = async () => {
  const res = await axios.get(`${PRODUCT_SERVICE_URL}/admin/product-service/products`);
  return res.data;
};

exports.getProductById = async (id) => {
  const res = await axios.get(`${PRODUCT_SERVICE_URL}/admin/product-service/products/${id}`);
  return res.data;
};

