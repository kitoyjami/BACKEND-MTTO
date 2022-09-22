import express from "express"
import productValidator from "../middlewares/productValidator.js"
import { getAllProduct, createProduct, getProductById, updateProductById, deleteProductById } from "../controllers/productController.js"


const router = express.Router()

router.route("/products")
.get(getAllProduct)
.post(productValidator, createProduct)

router.route("/products/:id")
.get(getProductById)
.put(updateProductById)
.delete(deleteProductById)

export default router