import Product from '../models/Product.js'

const createProduct = async( req, res) => {
   
    try {
        const newProduct= await Product.create(req.body)
        return res.json({
            msg: "Producto creado con exito",
            product: {newProduct}
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error al crear el el producto",
            error
        })
    }
   
   
}

const getAllProduct = async(req, res) => {

    try {
        const products = await Product.find()
        return res.json({
            msg: "Productos encontrados",
            data : {products}
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al obtener los productos",
            data:  error
        })
    }

}


const getProductById = async (req, res) => {
    try{
        const { id }  = req.params
        const product= await Product.findById(id)
        return res.json({
            msg: "Libro encontrado",
            data: { product }
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al obtener el producto",
            data: error
        })
    }
}

const updateProductById = async (req, res) => {
    try{
        const {id} = req.params
        const actual = req.body
        const bproduct = await Product.findByIdAndUpdate(id, actual, {new: true})    
        return res.json({
            msg: "Porducto actualizado",
            data: { product }
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al actualizar el producto",
            data: error
        })
    }

}

const deleteProductById = async (req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        return res.json({
            msg: "Producto eliminado",
            data: { product}
        })

    }catch (error) {
        return res.status(500).json({
            msg: "Error al eliminar el producto",
            data: error
        })
    }

} 

export { createProduct, getAllProduct, getProductById, updateProductById, deleteProductById }