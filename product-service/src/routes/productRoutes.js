const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/upload');

router.post(
  '/add-product',
  upload.fields([
    { name: 'image', maxCount: 1 },
  ]),
  productController.addProduct
);

router.get('/products', productController.getProducts);

router.get('/products/:id', productController.getProductById);

router.delete('/products/:id', productController.deleteProduct);

router.put(
  '/products/:id',
  upload.single('image'),
  productController.updateProduct
);

module.exports = router;
