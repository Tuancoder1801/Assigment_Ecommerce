const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      quantity,
    } = req.body;

    const imagePath = req.files["image"]
      ? "/uploads/" + req.files["image"][0].filename
      : "";

    const product = new Product({
      name,
      description,
      image: imagePath,
      price,
      quantity,
    });

    await product.save();
    console.log("Saved product:", product);
    res.status(201).json({ message: "Product created successfully", product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// LẤY DANH SÁCH SẢN PHẨM
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// XÓA SẢN PHẨM
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// SỬA SẢN PHẨM
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.quantity = req.body.quantity;

    if (req.file) {
      product.image = "/uploads/" + req.file.filename;
    }

    await product.save();
    res.json({ message: "Product updated successfully", product });
  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};
