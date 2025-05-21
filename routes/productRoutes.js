const express = require('express');
const {
  createProduct, getProducts, getProductById,
  updateProduct, deleteProduct, restockProduct
} = require('../controllers/productController');

const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);
router.put('/restock/:id', auth, restockProduct);

module.exports = router;
